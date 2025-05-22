from fastapi import FastAPI
from routers import trading

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Welcome to the main page!"}

app.include_router(trading.router)