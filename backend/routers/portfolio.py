from fastapi import APIRouter, HTTPException
from data.portfolio_data import load_portfolio
from storage import is_valid_user

router = APIRouter()

# GET endpoint to check current portfolio
@router.get("/portfolio/{user_id}")
def get_portfolio(user_id: str):
    if not is_valid_user(user_id):
        raise HTTPException(status_code=404, detail="Invalid user_id")
    portfolio = load_portfolio()
    user_holdings = portfolio.get(user_id, {})
    return {
        "portfolio": [{"stock_symbol": k, "quantity": v} for k, v in user_holdings.items()]
    }
