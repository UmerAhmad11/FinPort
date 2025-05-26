from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import trading, auth, frontpage, deposit, purchase_tracker  # import your trading endpoints

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
app.include_router(frontpage.router, prefix="/api", tags=["Frontpage"])
app.include_router(deposit.router, prefix="/api", tags=["Deposit"])
app.include_router(purchase_tracker.router, prefix="/api", tags=["Purchase Tracker"])


# Basic root endpoint for testing
@app.get("/")
async def root():
    return {"message": "Welcome to FinPort API 🚀"}
