from fastapi import APIRouter, HTTPException
from schemas import TradeRequest, TradeSell
from data.portfolio_data import save_purchases, load_portfolio
from data.trades import record_trade  # ✅ New import for trade history

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

    # ✅ Record trade history
    record_trade(user_id, {
        "type": "buy",
        "stock_symbol": stock,
        "quantity": trade.quantity
    })

    return {
        "message": f"✅ Bought {trade.quantity} shares of {stock} for user {user_id}"
    }

# POST endpoint to simulate selling a stock
@router.post("/sell")
async def sell(trade: TradeSell):
    user_id = str(trade.user_id)
    trader_id = str(trade.trader_id)  # the buyer
    stock = trade.stock_symbol.upper()

    portfolio = load_portfolio()
    user_portfolio = portfolio.get(user_id, {})
    buyer_portfolio = portfolio.get(trader_id, {})

    # Check if seller has enough stock
    if stock not in user_portfolio or user_portfolio[stock] < trade.quantity:
        raise HTTPException(status_code=400, detail="Not enough stock to sell")

    # Subtract stock from seller
    user_portfolio[stock] -= trade.quantity
    if user_portfolio[stock] <= 0:
        del user_portfolio[stock]
    save_purchases(user_id, user_portfolio)

    # Add stock to buyer
    buyer_portfolio[stock] = buyer_portfolio.get(stock, 0) + trade.quantity
    save_purchases(trader_id, buyer_portfolio)

    # ✅ Record trade history for seller
    record_trade(user_id, {
        "type": "sell",
        "stock_symbol": stock,
        "quantity": trade.quantity,
        "to": trader_id
    })

    # ✅ Record trade history for buyer
    record_trade(trader_id, {
        "type": "received",
        "stock_symbol": stock,
        "quantity": trade.quantity,
        "from": user_id
    })

    return {
        "message": f"✅ Sold {trade.quantity} shares of {stock} from user {user_id} to user {trader_id}"
    }

