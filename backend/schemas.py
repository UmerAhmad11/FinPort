from pydantic import BaseModel

class TradeRequest(BaseModel):
    user_id: str
    stock_symbol: str
    quantity: int
    total_cost: float = None


class TradeSell(BaseModel):
    trader_id: str
    user_id: str
    stock_symbol: str
    quantity: int

class SignupRequest(BaseModel):
    username: str
    password: str
    email: str
    fullname: str

class LoginRequest(BaseModel):
    username: str
    password: str

class DepositRequest(BaseModel):
    user_id: str
    amount: float
    
    