import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';

function Deposit() {

    const [mode] = useState('deposit');
    const [userId] = useState(localStorage.getItem('userId') || '');
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem('loggedInUser');
  
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
              Go to Frontpage
            </button>
           
          </div>
        </div>
      )
}

export default Deposit;
