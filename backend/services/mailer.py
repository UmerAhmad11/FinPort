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

    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = to_email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(msg)
            print("✅ Email sent successfully!")
    except Exception as e:
        print("❌ Failed to send email:", e)

def send_deposit_email(to_email, name, amount, new_balance):
    sender_email = os.getenv("EMAIL_ADDRESS")
    sender_password = os.getenv("EMAIL_PASSWORD")

    subject = "💰 Deposit Successful - FinPort"
    body = f"""
    Hi {name},

    We have received your deposit of ${amount:.2f}.

    ✅ Your new account balance is: ${new_balance:.2f}

    Thank you for using FinPort!

    Cheers,  
    FinPort Team
    """

    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = to_email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(msg)
            print("✅ Deposit email sent successfully!")
    except Exception as e:
        print("❌ Failed to send deposit email:", e)

def send_withdrawal_email(to_email, name, amount, new_balance):
    sender_email = os.getenv("EMAIL_ADDRESS")
    sender_password = os.getenv("EMAIL_PASSWORD")

    subject = "🏦 Withdrawal Processed - FinPort"
    body = f"""
    Hi {name},

    You have successfully withdrawn ${amount:.2f} from your FinPort account.

    ⚠️ Your remaining balance is: ${new_balance:.2f}

    Stay smart with your investments!

    Cheers,  
    FinPort Team
    """

    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = to_email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(msg)
            print("✅ Withdrawal email sent successfully!")
    except Exception as e:
        print("❌ Failed to send withdrawal email:", e)
