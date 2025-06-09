import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';

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
          setResponse(data.message); // ✅ show message
          setDepositAmount('');
          setError('');
        } catch (err) {
          console.error(err);
          setError('❌ Server error during deposit');
        }
      };
      


    return (
        <div className={`App ${mode}`}>
          {loggedInUser && (
            <h1 className="welcome-message">Deposit Page for {loggedInUser}</h1>
          )}
      
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
      
        <div className="goto-trading">
            <button
              type="button"
              className="goto-trading-button"
              onClick={() => navigate('/trade')}
            >
              Go to Trading
            </button>
            <button
                type="button"
                className="front-to-login-button"
                onClick={() => {
                    localStorage.removeItem('loggedInUser'); // ✅ Log out
                    navigate('/'); // ✅ Redirect to login
                }}
            >
                Log Out
            </button>
            <button
              type="button"
              className="backto-frontpage-button"
              onClick={() => navigate('/frontpage')}
            >
              Back to Home
            </button>
        </div>

        <div className="deposit-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Enter amount to deposit"
                    value={depositAmount}
                    className="input-default"
                    onChange={(e) => setDepositAmount(e.target.value)}
                />
                <button 
                    type="submit"
                    className="deposit-button"
                >   Deposit
                </button>
            </form>
        </div>
        {response && (
            <p className="response-deposit">
                {response}
            </p>
        )}

        </div>
      )
}

export default Deposit;
