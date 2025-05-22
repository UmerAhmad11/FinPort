from fastapi import APIRouter
from schemas import TradeRequest  # Pydantic model that defines the request format

# Create a router for trading-related endpoints
router = APIRouter()

# GET test endpoint (e.g., to check if route works)
@router.get("/trade")
async def get_trade():
    return {"message": "Trade endpoint is live!"}

# POST endpoint to simulate buying a stock
@router.post("/buy")
async def buy(trade: TradeRequest):  # trade will automatically be parsed from JSON
    return {
        "message": f"Buying {trade.quantity} shares of {trade.stock_symbol} for user {trade.user_id}"
    }

# POST endpoint to simulate selling a stock
@router.post("/sell")
async def sell(trade: TradeRequest):
    return {
        "message": f"Selling {trade.quantity} shares of {trade.stock_symbol} for user {trade.user_id}"
    }
