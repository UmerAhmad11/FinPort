from fastapi import APIRouter, HTTPException
from schemas import SignupRequest, LoginRequest
import bcrypt
import uuid
from storage import load_users, save_users
from mailer import send_welcome_email


router = APIRouter()

# In-memory "database"
users_db = {}

@router.post("/signup")
def signup(data: SignupRequest):
    users = load_users()

    if data.username in users:
        raise HTTPException(status_code=400, detail="Username already exists")

    hashed_pw = bcrypt.hashpw(data.password.encode(), bcrypt.gensalt()).decode()
    user_id = str(uuid.uuid4())
    users[data.username] = {
        "id" : user_id,
        "email" : data.email,
        "password": hashed_pw,
        "name": data.fullname
    }
    send_welcome_email(data.email, data.fullname, user_id)
    save_users(users)

    return {
        "message": "User registered successfully",
        "user_id": user_id
        }

@router.post("/login")
def login(data: LoginRequest):
    users = load_users()

    if data.username not in users:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    stored_pw = users[data.username]["password"].encode()

    if not bcrypt.checkpw(data.password.encode(), stored_pw):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {"message": "Login successful"}