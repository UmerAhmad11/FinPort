from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, frontpage  # import your auth/home endpoints
from routers import trading, trades_tracker, portfolio  # import your trading endpoints
from routers import deposit, withdraw  # import your trading endpoints

# Create the FastAPI app instance
app = FastAPI()

# Enable CORS so frontend can access backend from a different port
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost",  # Production frontend
        "http://localhost:80",  # Production frontend with explicit port
        "http://localhost:5173",  # Development frontend
        "http://127.0.0.1",
        "http://127.0.0.1:80",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register the trading router under /api
app.include_router(trading.router, prefix="/api", tags=["Trading"])
app.include_router(auth.router, prefix="/main", tags=["Auth"])
app.include_router(frontpage.router, prefix="/main", tags=["Frontpage"])
app.include_router(deposit.router, prefix="/api", tags=["Deposit"])
app.include_router(trades_tracker.router, prefix="/api", tags=["Trades Tracker"])
app.include_router(portfolio.router, prefix="/api", tags=["Portfolio"])
app.include_router(withdraw.router, prefix="/api", tags=["Withdraw"])

# Basic root endpoint for testing
@app.get("/")
async def root():
    return {"message": "Welcome to FinPort API 🚀"}
