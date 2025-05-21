# FinPort

Project Name: FinPort — Financial Portfolio Manager
Tech Stack
Backend: Python (Flask or FastAPI) or Java (Spring Boot)

Frontend (optional): React or basic HTML templates

API Integration: Live market data from Alpha Vantage or Finnhub

Database: PostgreSQL or SQLite

Extras: Docker, GitHub Actions (CI), Kubernetes (deployment)

Core Features
User Portfolio Management

Create user accounts (no auth needed, just simulate)

Buy/Sell stocks

View current portfolio with holdings, gains/losses

Stock Market Data Integration

Pull real-time or historical stock prices via API

Cache responses to reduce API calls

Backend API

/buy, /sell, /portfolio, /stocks/<ticker>

JSON input/output

Database Storage

Tables: Users, Transactions, Holdings

Store each buy/sell as a row, update net holdings

Optional Frontend

React app to interact with the API

Docker + CI/CD

Dockerize the app

GitHub Actions: run tests + build Docker image

Deploy to Kubernetes (Minikube or GKE)

Phase 1 – Build the Core (Local)
Set up the backend API with buy, sell, portfolio

Connect to a real stock API (I can help with this)

Store users and transactions in SQLite/Postgres

Phase 2 – Docker + CI
Add a Dockerfile

Write basic unit tests

Set up GitHub Actions for test + build

Phase 3 – Kubernetes
Create deployment.yaml, service.yaml

Deploy to Minikube (local K8s cluster)