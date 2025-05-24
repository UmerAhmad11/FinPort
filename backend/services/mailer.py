import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from routers import auth
import os
from dotenv import load_dotenv
load_dotenv()

def send_welcome_email(to_email, name, user_id):
    sender_email = os.getenv("EMAIL_ADDRESS")
    sender_password = os.getenv("EMAIL_PASSWORD")

    subject = "Welcome to FinPort!"
    body = f"""
    Hi {name},

    🎉 Welcome to FinPort! Your account was successfully created.

    You can now log in and start trading 🚀

    Your User ID is: {user_id}

    Cheers,  
    FinPort Team
    """

    # Email setup
    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = to_email
    msg["Subject"] = subject

    msg.attach(MIMEText(body, "plain"))

    # Send the email
    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(msg)
            print("✅ Email sent successfully!")
    except Exception as e:
        print("❌ Failed to send email:", e)
