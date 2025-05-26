import json
import os

PORTFOLIO_FILE = os.path.join("data", "portfolio.json")

def load_portfolio():
    if not os.path.exists(PORTFOLIO_FILE):
        return {}
    with open(PORTFOLIO_FILE, "r") as f:
        return json.load(f)

def save_purchases(purchases):
    with open(PORTFOLIO_FILE, "w") as f:
        json.dump(purchases, f, indent=2)

