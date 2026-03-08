import httpx
import os
from typing import List, Optional, Dict, Any
from datetime import datetime, timedelta
from dotenv import load_dotenv

from models.portfolio import Project

load_dotenv()

class GitHubService:
    """Service to interact with GitHub API — starred repos"""

    def __init__(self):
        self.username = os.getenv("GITHUB_USERNAME", "")
        self.token = os.getenv("GITHUB_TOKEN", "")
        self.max_projects = int(os.getenv("MAX_PROJECTS", "11"))
        self.base_url = "https://api.github.com"

        self._cache: Optional[List[Project]] = None
        self._cache_time: Optional[datetime] = None
        self._cache_ttl = int(os.getenv("CACHE_TTL_SECONDS", "3600"))

        self.headers = {
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "Portfolio-Backend"
        }
        if self.token:
            self.headers["Authorization"] = f"token {self.token}"

    def _is_cache_valid(self) -> bool:
        if self._cache is None or self._cache_time is None:
            return False
        return datetime.now() - self._cache_time < timedelta(seconds=self._cache_ttl)

    async def get_starred_repos(self) -> List[Dict[str, Any]]:
        """Fetch starred repositories"""
        if not self.username:
            raise ValueError("GITHUB_USERNAME not configured")

        url = f"{self.base_url}/users/{self.username}/starred"
        params = {"per_page": 100, "sort": "updated"}

        async with httpx.AsyncClient() as client:
            response = await client.get(url, headers=self.headers, params=params)
            response.raise_for_status()
            return response.json()

    async def get_branding_image(self, owner: str, repo: str) -> Optional[str]:
        """
        Try to get branding/preview.png as a base64 data URI.
        Returns None if not found, empty, or too large.
        """
        url = f"{self.base_url}/repos/{owner}/{repo}/contents/branding/preview.png"
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(url, headers=self.headers)
                if response.status_code != 200:
                    return None
                data = response.json()
                # GitHub returns empty content for files > 1MB
                content = data.get("content", "").replace("\n", "")
                if content:
                    return f"data:image/png;base64,{content}"
        except Exception:
            pass
        return None

    def get_social_preview_url(self, owner: str, repo: str) -> str:
        """GitHub OpenGraph social preview — always works for any public repo"""
        return f"https://opengraph.githubassets.com/1/{owner}/{repo}"

    async def get_portfolio_projects(self, use_cache: bool = True) -> tuple[List[Project], bool]:
        """
        Get portfolio projects from starred repos.
        Uses branding/preview.png when available, falls back to GitHub social preview.
        """
        if use_cache and self._is_cache_valid():
            return self._cache, True

        repos = await self.get_starred_repos()

        projects = []
        for repo in repos:
            if len(projects) >= self.max_projects:
                break

            owner = repo["owner"]["login"]
            repo_name = repo["name"]

            # Try branding image first, fall back to social preview
            image_base64 = await self.get_branding_image(owner, repo_name)
            image_url = None if image_base64 else self.get_social_preview_url(owner, repo_name)

            languages = [repo["language"]] if repo.get("language") else []
            topics = repo.get("topics", [])
            category = topics[0] if topics else "Development"

            project = Project(
                name=repo["name"],
                description=repo.get("description"),
                url=repo["html_url"],
                homepage=repo.get("homepage") or None,
                image_url=image_url,
                image_base64=image_base64,
                technologies=languages,
                stars=repo.get("stargazers_count", 0),
                category=category.capitalize()
            )
            projects.append(project)

        self._cache = projects
        self._cache_time = datetime.now()
        return projects, False
