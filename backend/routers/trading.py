from fastapi import APIRouter
from schemas import TradeRequest, TradeSell  # Pydantic model that defines the request format

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
async def sell(trade: TradeSell):
    return {
        "message": f"User {trade.user_id} is selling {trade.quantity} shares of {trade.stock_symbol} to User {trade.trader_id}"
    }
