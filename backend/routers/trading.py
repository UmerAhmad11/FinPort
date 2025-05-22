from fastapi import APIRouter

router = APIRouter()

@router.get("/trade")
async def get_trade():
    return {"message": "Trade endpoint is live!"}

@router.post("/buy")

async def buy():
    return {"message": "Buy endpoint is live!"}

@router.post("/sell")

async def sell():
    return {"message": "Sell endpoint is live!"}