from pydantic import BaseModel

class TradeRequest(BaseModel):
    user_id: int
    stock_symbol: str
    quantity: int


class TradeSell(BaseModel):
    trader_id: int
    user_id: int
    stock_symbol: str
    quantity: int
    