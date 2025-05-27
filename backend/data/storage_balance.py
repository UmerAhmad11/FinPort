import json
import os

BALANCE_FILE = os.path.join("data", "balances.json")

def load_balances():
    if not os.path.exists(BALANCE_FILE):
        return {}
    with open(BALANCE_FILE, "r") as f:
        return json.load(f)

def save_balances(balances):
    with open(BALANCE_FILE, "w") as f:
        json.dump(balances, f, indent=2)

def withdraw_balances(user_id: str, amount: float):
    balances = load_balances()

    if user_id not in balances:
        raise ValueError("User ID not found in balances.")

    if balances[user_id] < amount:
        raise ValueError("Insufficient balance to withdraw.")

    balances[user_id] -= amount
    save_balances(balances)

    return balances[user_id]
