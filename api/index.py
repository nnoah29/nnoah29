from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import logging

from models.portfolio import PortfolioResponse
from services.github_service import GitHubService

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Global service instance
github_service: GitHubService = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifespan context manager for startup/shutdown events"""
    global github_service
    
    # Startup
    logger.info("Starting Portfolio Backend API...")
    github_service = GitHubService()
    logger.info(f"GitHub service initialized for user: {github_service.username}")
    
    yield
    
    # Shutdown
    logger.info("Shutting down Portfolio Backend API...")


# Create FastAPI app
app = FastAPI(
    title="Portfolio Backend API",
    description="Backend API to fetch GitHub projects for portfolio",
    version="1.0.0",
    lifespan=lifespan
)

# Configure CORS for Angular frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:4200",  # Angular dev server
        "http://127.0.0.1:4200",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Portfolio Backend API",
        "version": "1.0.0",
        "endpoints": {
            "portfolio": "/api/portfolio",
            "docs": "/docs"
        }
    }


@app.get("/api/portfolio", response_model=PortfolioResponse)
async def get_portfolio():
    """
    Get portfolio projects from GitHub starred repositories
    
    Returns:
        PortfolioResponse: List of projects with their details and branding images
    
    Raises:
        HTTPException: If GitHub API fails or configuration is missing
    """
    try:
        logger.info("Fetching portfolio projects...")
        
        projects, is_cached = await github_service.get_portfolio_projects()
        
        logger.info(f"Retrieved {len(projects)} projects (cached: {is_cached})")
        
        return PortfolioResponse(
            projects=projects,
            total=len(projects),
            cached=is_cached
        )
    
    except ValueError as e:
        logger.error(f"Configuration error: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Configuration error: {str(e)}"
        )
    
    except Exception as e:
        logger.error(f"Error fetching portfolio: {e}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch portfolio projects: {str(e)}"
        )


@app.get("/api/portfolio/refresh", response_model=PortfolioResponse)
async def refresh_portfolio():
    """
    Force refresh portfolio data (bypass cache)
    
    Returns:
        PortfolioResponse: Fresh list of projects from GitHub
    """
    try:
        logger.info("Force refreshing portfolio projects...")
        
        projects, _ = await github_service.get_portfolio_projects(use_cache=False)
        
        logger.info(f"Retrieved {len(projects)} projects (fresh data)")
        
        return PortfolioResponse(
            projects=projects,
            total=len(projects),
            cached=False
        )
    
    except Exception as e:
        logger.error(f"Error refreshing portfolio: {e}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail=f"Failed to refresh portfolio projects: {str(e)}"
        )


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "portfolio-backend",
        "github_configured": bool(github_service.username)
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001, reload=True)
