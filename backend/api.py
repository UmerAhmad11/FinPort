from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import trading, auth  # import your trading endpoints

# Create the FastAPI app instance
app = FastAPI()

# Enable CORS so frontend can access backend from a different port (5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register the trading router under /api
app.include_router(trading.router, prefix="/api", tags=["Trading"])
app.include_router(auth.router, prefix="/api", tags=["Auth"])

# Basic root endpoint for testing
@app.get("/")
async def root():
    return {"message": "Welcome to FinPort API 🚀"}
