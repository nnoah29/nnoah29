import httpx
import base64
import os
from typing import List, Optional, Dict, Any
from datetime import datetime, timedelta
from dotenv import load_dotenv

from models.portfolio import Project

# Load environment variables
load_dotenv()


class GitHubService:
    """Service to interact with GitHub API"""
    
    def __init__(self):
        self.username = os.getenv("GITHUB_USERNAME", "")
        self.token = os.getenv("GITHUB_TOKEN", "")
        self.max_projects = int(os.getenv("MAX_PROJECTS", "5"))
        self.base_url = "https://api.github.com"
        
        # Cache
        self._cache: Optional[List[Project]] = None
        self._cache_time: Optional[datetime] = None
        self._cache_ttl = int(os.getenv("CACHE_TTL_SECONDS", "3600"))
        
        # HTTP headers
        self.headers = {
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "Portfolio-Backend"
        }
        if self.token:
            self.headers["Authorization"] = f"token {self.token}"
    
    def _is_cache_valid(self) -> bool:
        """Check if cache is still valid"""
        if self._cache is None or self._cache_time is None:
            return False
        
        age = datetime.now() - self._cache_time
        return age < timedelta(seconds=self._cache_ttl)
    
    async def get_starred_repos(self) -> List[Dict[str, Any]]:
        """Fetch starred repositories from GitHub"""
        if not self.username:
            raise ValueError("GITHUB_USERNAME not configured")
        
        url = f"{self.base_url}/users/{self.username}/starred"
        params = {
            "per_page": 30,  # Fetch more to find enough with branding images
            "sort": "updated"
        }
        
        async with httpx.AsyncClient() as client:
            response = await client.get(url, headers=self.headers, params=params)
            response.raise_for_status()
            return response.json()
    
    async def get_repo_contents(self, owner: str, repo: str, path: str) -> Optional[Dict[str, Any]]:
        """Get contents of a file/directory in a repository"""
        url = f"{self.base_url}/repos/{owner}/{repo}/contents/{path}"
        
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(url, headers=self.headers)
                if response.status_code == 404:
                    return None
                response.raise_for_status()
                return response.json()
        except httpx.HTTPError:
            return None
    
    async def get_branding_image(self, owner: str, repo: str) -> str:
        """
        Get branding image from repository's branding/preview.png
        Returns base64 encoded image or raises ValueError if not found
        """
        path = "branding/preview.png"
        content = await self.get_repo_contents(owner, repo, path)
        
        if content and isinstance(content, dict) and content.get("type") == "file":
            # GitHub API returns base64 encoded content
            image_data = content.get("content", "")
            # Remove newlines from GitHub's base64 encoding
            image_data = image_data.replace("\n", "")
            
            return f"data:image/png;base64,{image_data}"
        
        raise ValueError(f"Image 'branding/preview.png' non trouvée dans le repo {repo}")
    
    async def get_portfolio_projects(self, use_cache: bool = True) -> tuple[List[Project], bool]:
        """
        Get portfolio projects from GitHub starred repos
        Returns (projects, is_cached)
        """
        # Check cache
        if use_cache and self._is_cache_valid():
            return self._cache, True
        
        # Fetch starred repos
        repos = await self.get_starred_repos()
        
        projects = []
        for repo in repos:
            if len(projects) >= self.max_projects:
                break
                
            owner = repo["owner"]["login"]
            repo_name = repo["name"]
            
            try:
                # Get branding image (strictly preview.png)
                image_data = await self.get_branding_image(owner, repo_name)
                
                # Extract languages/technologies
                languages = []
                if repo.get("language"):
                    languages.append(repo["language"])
                
                # Determine category from topics
                topics = repo.get("topics", [])
                category = topics[0] if topics else "Development"
                
                project = Project(
                    name=repo["name"],
                    description=repo.get("description"),
                    url=repo["html_url"],
                    homepage=repo.get("homepage"),
                    image_base64=image_data,
                    technologies=languages,
                    stars=repo.get("stargazers_count", 0),
                    category=category.capitalize()
                )
                
                projects.append(project)
            except ValueError as e:
                # Skip projects without required image
                print(f"Skipping {repo_name}: {e}")
                continue
        
        # Update cache
        self._cache = projects
        self._cache_time = datetime.now()
        
        return projects, False
