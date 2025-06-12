import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Deposit.css';

function Deposit() {

    const [mode] = useState('deposit');
    const [userId] = useState(localStorage.getItem('userId') || '');
    const [balance, setBalance] = useState(null);
    const [depositAmount, setDepositAmount] = useState('');
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem('loggedInUser');

    // Utility function to clear form after pressing submit
    const resetForm = () => {
        setUserId('');
        setStockSymbol('');
        setQuantity('');
        setTraderId('');
        setResponse('');
    };

    //To get balance from balances.json
    useEffect(() => {
      if (!userId) {
        setError('❌ No user ID found in localStorage');
        return;
      }
  
      fetch(`http://127.0.0.1:8000/api/balance/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.balance !== undefined) {
            setBalance(data.balance);
          } else {
            setError('❌ Could not fetch balance');
          }
        })
        .catch((err) => {
          console.error(err);
          setError('❌ Server error fetching balance');
        });
    }, [userId]);

    useEffect(() => {
        if (response) {
          const timer = setTimeout(() => setResponse(''), 4000);
          return () => clearTimeout(timer);
        }
      }, [response]);

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const url = `http://127.0.0.1:8000/api/deposit`;
      
        if (!depositAmount || isNaN(depositAmount) || Number(depositAmount) <= 0) {
          setError('⚠️ Please enter a valid deposit amount');
          return;
        }
      
        try {
          const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              user_id: userId,
              amount: parseFloat(depositAmount),
            }),
          });
      
          const data = await res.json();
      
          if (!res.ok) {
            setError(data.detail || '❌ Deposit failed');
            return;
          }
      
          setBalance(data.new_balance);
          setResponse(`✅ Successfully deposited: $${depositAmount}`); // ✅ show message
          setDepositAmount('');
          setError('');
        } catch (err) {
          console.error(err);
          setError('❌ Server error during deposit');
        }
      };
      


    return (
        <div className="frontpage-bg-fintech">
            <svg className="fintech-bg-svg" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                <linearGradient id="fintechGradient1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00C4FF"/>
                    <stop offset="100%" stopColor="#007FFF"/>
                </linearGradient>
                <linearGradient id="fintechGradient2" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#39FF14"/>
                    <stop offset="100%" stopColor="#00B300"/>
                </linearGradient>
                <linearGradient id="fintechGradient3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FF6B6B"/>
                    <stop offset="100%" stopColor="#FF0000"/>
                </linearGradient>
                </defs>
                {/* Animated Bars (like a growing chart) */}
                <rect x="100" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
                <animate attributeName="height" values="0;150;0" dur="5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;650;800" dur="5s" repeatCount="indefinite"/>
                </rect>
                <rect x="200" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
                <animate attributeName="height" values="0;100;0" dur="6s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;700;800" dur="6s" repeatCount="indefinite"/>
                </rect>
                <rect x="300" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
                <animate attributeName="height" values="0;200;0" dur="7s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;600;800" dur="7s" repeatCount="indefinite"/>
                </rect>
                <rect x="400" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
                <animate attributeName="height" values="0;120;0" dur="5.5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;680;800" dur="5.5s" repeatCount="indefinite"/>
                </rect>
                <rect x="500" y="800" width="40" height="0" fill="url(#fintechGradient3)" opacity="0.6">
                <animate attributeName="height" values="0;180;0" dur="6.5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;620;800" dur="6.5s" repeatCount="indefinite"/>
                </rect>
                <rect x="600" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
                <animate attributeName="height" values="0;160;0" dur="5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;640;800" dur="5s" repeatCount="indefinite"/>
                </rect>
                <rect x="700" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
                <animate attributeName="height" values="0;140;0" dur="6s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;660;800" dur="6s" repeatCount="indefinite"/>
                </rect>
                <rect x="800" y="800" width="40" height="0" fill="url(#fintechGradient3)" opacity="0.6">
                <animate attributeName="height" values="0;190;0" dur="7s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;610;800" dur="7s" repeatCount="indefinite"/>
                </rect>
                <rect x="900" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
                <animate attributeName="height" values="0;170;0" dur="5.5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;630;800" dur="5.5s" repeatCount="indefinite"/>
                </rect>
                <rect x="1000" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
                <animate attributeName="height" values="0;130;0" dur="6s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;670;800" dur="6s" repeatCount="indefinite"/>
                </rect>
                <rect x="1100" y="800" width="40" height="0" fill="url(#fintechGradient3)" opacity="0.6">
                <animate attributeName="height" values="0;200;0" dur="7s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;600;800" dur="7s" repeatCount="indefinite"/>
                </rect>
                <rect x="1200" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
                <animate attributeName="height" values="0;150;0" dur="5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;650;800" dur="5s" repeatCount="indefinite"/>
                </rect>
                <rect x="1300" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
                <animate attributeName="height" values="0;110;0" dur="6s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;690;800" dur="6s" repeatCount="indefinite"/>
                </rect>
                <rect x="1400" y="800" width="40" height="0" fill="url(#fintechGradient3)" opacity="0.6">
                <animate attributeName="height" values="0;180;0" dur="7s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;620;800" dur="7s" repeatCount="indefinite"/>
                </rect>
                {/* Animated Line Graph */}
                <polyline points="0,450 300,400 600,480 900,420 1200,500 1440,450" fill="none" stroke="#00C4FF" strokeWidth="3" opacity="0.4">
                <animate attributeName="points" values="0,450 300,400 600,480 900,420 1200,500 1440,450;0,460 300,390 600,490 900,410 1200,510 1440,460;0,450 300,400 600,480 900,420 1200,500 1440,450" dur="15s" repeatCount="indefinite"/>
                </polyline>
                {/* Animated Dots/Nodes (like network activity) */}
                <circle cx="250" cy="300" r="8" fill="#00C4FF" opacity="0.3">
                <animate attributeName="cy" values="300;320;300" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="700" cy="250" r="8" fill="#39FF14" opacity="0.3">
                <animate attributeName="cy" values="250;270;250" dur="5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="1000" cy="350" r="8" fill="#007FFF" opacity="0.3">
                <animate attributeName="cy" values="350;370;350" dur="4.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="1300" cy="200" r="8" fill="#00B300" opacity="0.3">
                <animate attributeName="cy" values="200;220;200" dur="6s" repeatCount="indefinite"/>
                </circle>
                {/* Additional Animated Graph on the Right (near the top) */}
                <polyline points="1200,100 1300,80 1400,120 1500,60" fill="none" stroke="#39FF14" strokeWidth="2" opacity="0.4">
                <animate attributeName="points" values="1200,100 1300,80 1400,120 1500,60;1200,110 1300,70 1400,130 1500,50;1200,100 1300,80 1400,120 1500,60" dur="10s" repeatCount="indefinite"/>
                </polyline>
                <rect x="1250" y="150" width="30" height="0" fill="url(#fintechGradient1)" opacity="0.5">
                <animate attributeName="height" values="0;80;0" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="y" values="150;70;150" dur="4s" repeatCount="indefinite"/>
                </rect>
                <rect x="1350" y="150" width="30" height="0" fill="url(#fintechGradient2)" opacity="0.5">
                <animate attributeName="height" values="0;60;0" dur="5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="150;90;150" dur="5s" repeatCount="indefinite"/>
                </rect>
                <rect x="1450" y="150" width="30" height="0" fill="url(#fintechGradient1)" opacity="0.5">
                <animate attributeName="height" values="0;100;0" dur="6s" repeatCount="indefinite"/>
                <animate attributeName="y" values="150;50;150" dur="6s" repeatCount="indefinite"/>
                </rect>
            </svg>
      
            <div className="trading-card">
                <h2 className="trading-card-title">Deposit Page for {loggedInUser}</h2>
          
                {userId && (
                    <p style={{ textAlign: 'center', color: '#ccc' }}>
                        <strong>User ID:</strong> {userId}
                    </p>
                )}
          
                {balance !== null && (
                    <p style={{ textAlign: 'center', color: '#9efcba' }}>
                        <strong>Current Balance:</strong> ${balance.toFixed(2)}
                    </p>
                )}
          
                {error && (
                    <p className="response" style={{ color: 'salmon' }}>
                        {error}
                    </p>
                )}
          
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <span className="input-icon">&#36;</span> {/* Dollar sign icon */}
                        <input
                            type="number"
                            placeholder="Enter amount to deposit"
                            value={depositAmount}
                            className="input-pink"
                            onChange={(e) => setDepositAmount(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit"
                        className="auth-btn"
                    >   Deposit
                    </button>

                    <button
                        type="button"
                        className="auth-link"
                        onClick={() => navigate('/trade')}
                    >
                        Go to Trading
                    </button>
                    <button
                        type="button"
                        className="auth-link"
                        onClick={() => navigate('/frontpage')}
                    >
                        Back to Home
                    </button>
                    <button
                        type="button"
                        className="auth-link logout"
                        onClick={() => {
                            localStorage.removeItem('loggedInUser');
                            localStorage.removeItem('userId');
                            navigate('/');
                        }}
                    >
                        Logout
                    </button>
                </form>
            </div>
            {response && (
                <div className="notification" style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '15px 25px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 1000,
                    animation: 'fadeInOut 4s ease-in-out',
                    opacity: 0
                }}>
                    {response}
                </div>
            )}
        </div>
    );
}

export default Deposit;
