from fastapi import APIRouter, HTTPException
from data.portfolio_data import save_purchases, load_portfolio
from storage import is_valid_user


router = APIRouter()

# GET endpoint to check balance
@router.get("/purchases/{user_id}")
def get_balance(user_id: str):
    if not is_valid_user(user_id):
        raise HTTPException(status_code=404, detail="Invalid user_id")
    purchases = load_portfolio()
    user_purchases = purchases.get(user_id, {})
    return {
        "purchases": [{"stock_symbol": k, "quantity": v} for k, v in user_purchases.items()]
    }