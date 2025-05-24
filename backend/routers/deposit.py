from fastapi import APIRouter, HTTPException
from schemas import DepositRequest
from data.storage_balance import load_balances, save_balances
from storage import is_valid_user

router = APIRouter()

# GET endpoint to check balance
@router.get("/balance/{user_id}")
def get_balance(user_id: str):
    if not is_valid_user(user_id):
        raise HTTPException(status_code=404, detail="Invalid user_id")
    balances = load_balances()
    return {"balance": balances.get(user_id, 0.0)}

# POST endpoint to deposit money
@router.post("/deposit")
def deposit_funds(req: DepositRequest):
    if req.amount <= 0:
        raise HTTPException(status_code=400, detail="Deposit amount must be positive")
    
    if not is_valid_user(req.user_id):
        raise HTTPException(status_code=404, detail="Invalid user_id")
    
    balances = load_balances()
    balances[req.user_id] = balances.get(req.user_id, 0.0) + req.amount
    save_balances(balances)
    return {
        "message": f"Deposited ${req.amount:.2f}",
        "new_balance": balances[req.user_id]
    }
