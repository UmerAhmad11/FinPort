from fastapi import APIRouter

router = APIRouter()

@router.get("/trade")
async def get_trade():
    return {"message": "Trade endpoint is live!"}