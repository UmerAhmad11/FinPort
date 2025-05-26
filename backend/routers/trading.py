from fastapi import APIRouter
from schemas import TradeRequest, TradeSell  # Pydantic model that defines the request format
from data.portfolio_data import save_purchases, load_portfolio


# Create a router for trading-related endpoints
router = APIRouter()

# GET test endpoint (e.g., to check if route works)
@router.get("/trade")
async def get_trade():
    return {"message": "Trade endpoint is live!"}

# POST endpoint to simulate buying a stock
@router.post("/buy")
async def buy(trade: TradeRequest):
    user_id = str(trade.user_id)
    stock = trade.stock_symbol.upper()

    portfolio = load_portfolio()
    user_portfolio = portfolio.get(user_id, {})

    # Add/update stock
    current_qty = user_portfolio.get(stock, 0)
    user_portfolio[stock] = current_qty + trade.quantity

    save_purchases(user_id, user_portfolio)

    return {
        "message": f"✅ Bought {trade.quantity} shares of {stock} for user {user_id}"
    }

# POST endpoint to simulate selling a stock
@router.post("/sell")
async def sell(trade: TradeSell):
    return {
        "message": f"User {trade.user_id} is selling {trade.quantity} shares of {trade.stock_symbol} to User {trade.trader_id}"
    }
