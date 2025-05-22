from fastapi import FastAPI
from routers import trading


app = FastAPI()

app.include_router(trading.router, prefix="/api", tags=["Trading"])

@app.get("/")
async def root():
    return {"message": "Welcome to the main page!"}

