from pydantic import BaseModel, Field
from typing import List, Optional


class Project(BaseModel):
    """Model representing a GitHub project for the portfolio"""
    
    name: str = Field(..., description="Project name")
    description: Optional[str] = Field(None, description="Project description")
    url: str = Field(..., description="GitHub repository URL")
    homepage: Optional[str] = Field(None, description="Project homepage/demo URL")
    image_url: Optional[str] = Field(None, description="URL to branding image")
    image_base64: Optional[str] = Field(None, description="Base64 encoded image data")
    technologies: List[str] = Field(default_factory=list, description="Technologies/languages used")
    stars: int = Field(0, description="Number of GitHub stars")
    category: Optional[str] = Field(None, description="Project category")
    
    class Config:
        json_schema_extra = {
            "example": {
                "name": "awesome-project",
                "description": "An awesome project that does amazing things",
                "url": "https://github.com/username/awesome-project",
                "homepage": "https://awesome-project.com",
                "image_url": "https://raw.githubusercontent.com/username/awesome-project/main/branding/preview.png",
                "technologies": ["Python", "FastAPI", "React"],
                "stars": 42,
                "category": "Web Development"
            }
        }


class PortfolioResponse(BaseModel):
    """Response model for portfolio endpoint"""
    
    projects: List[Project] = Field(..., description="List of portfolio projects")
    total: int = Field(..., description="Total number of projects")
    cached: bool = Field(False, description="Whether data was served from cache")
    
    class Config:
        json_schema_extra = {
            "example": {
                "projects": [],
                "total": 5,
                "cached": False
            }
        }
