import json
import os

TRADES_FILE = os.path.join("data", "trades.json")

def load_trades():
    if not os.path.exists(TRADES_FILE):
        return {}
    with open(TRADES_FILE, "r") as f:
        return json.load(f)

def record_trade(user_id, trade):
    user_id = str(user_id)
    data = load_trades()
    if user_id not in data:
        data[user_id] = []
    data[user_id].append(trade)

    with open(TRADES_FILE, "w") as f:
        json.dump(data, f, indent=2)
