from fastapi import APIRouter
from schemas import TradeRequest

router = APIRouter()

@router.get("/trade")
async def get_trade():
    return {"message": "Trade endpoint is live!"}

@router.post("/buy")

async def buy(trade: TradeRequest):
    return {"message": "Buying {trade.quantity} shares of {trade.symbol} for user {trade.user_id}"}

@router.post("/sell")

async def sell():
    return {"message": "Sell endpoint is live!"}