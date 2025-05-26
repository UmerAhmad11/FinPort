from fastapi import APIRouter, HTTPException
from data.trades import load_trades  # ✅ use trade history now
from storage import is_valid_user

router = APIRouter()

# GET endpoint to check trade history
@router.get("/trades/{user_id}")
def get_trade_history(user_id: str):
    if not is_valid_user(user_id):
        raise HTTPException(status_code=404, detail="Invalid user_id")
    
    trades = load_trades()
    user_trades = trades.get(user_id, [])

    return {
        "trades": user_trades  # already a list of dicts like {type, stock_symbol, quantity, ...}
    }
