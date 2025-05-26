import json
import os

PORTFOLIO_FILE = os.path.join("data", "portfolio.json")

def load_portfolio():
    if not os.path.exists(PORTFOLIO_FILE):
        return {}
    with open(PORTFOLIO_FILE, "r") as f:
        return json.load(f)

def save_purchases(user_id, purchases):
    user_id = str(user_id)  # ensure consistent key format
    data = load_portfolio()

    # Update only this user's portfolio
    data[user_id] = purchases

    # Save entire updated data back to file
    with open(PORTFOLIO_FILE, "w") as f:
        json.dump(data, f, indent=2)

