from fastapi import APIRouter, HTTPException
from schemas import DepositRequest
from data.storage_balance import load_balances, save_balances, withdraw_balances
from storage import is_valid_user, load_users
from services.mailer import send_withdrawal_email

router = APIRouter()

@router.get("/balance/{user_id}")
def get_balance(user_id: str):
    if not is_valid_user(user_id):
        raise HTTPException(status_code=404, detail="Invalid user_id")
    balances = load_balances()
    return {"balance": balances.get(user_id, 0.0)}

@router.post("/withdraw")
def withdraw_funds(req: DepositRequest):
    if req.amount <= 0:
        raise HTTPException(status_code=400, detail="Withdrawal amount must be positive")

    if not is_valid_user(req.user_id):
        raise HTTPException(status_code=404, detail="Invalid user_id")

    try:
        new_balance = withdraw_balances(req.user_id, req.amount)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    # ✅ Send withdrawal email
    users = load_users()
    user_info = next((u for u in users.values() if u["id"] == req.user_id), None)
    if user_info:
        send_withdrawal_email(
            to_email=user_info["email"],
            name=user_info["name"],
            amount=req.amount,
            new_balance=new_balance
        )

    return {
        "message": f"Withdrawn ${req.amount:.2f}",
        "new_balance": new_balance
    }
