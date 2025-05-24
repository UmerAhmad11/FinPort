from fastapi import APIRouter

router = APIRouter()

@router.get('/frontpage')

async def get_front_page():
    return {"message" : "FrontPage is Live!"}
