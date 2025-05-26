import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function TradesTracker() {
  const [mode] = useState('trades');
  const userId = localStorage.getItem('userId') || '';
  const loggedInUser = localStorage.getItem('loggedInUser');
  const navigate = useNavigate();

  const [trades, setTrades] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    fetch(`http://127.0.0.1:8000/api/trades/${userId}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.trades)) {
          setTrades(data.trades); // ✅ Correct field name
        } else {
          setTrades([]);
        }

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setTrades([]);
        setError('❌ Failed to load trades');
        setLoading(false);
      });
  }, [userId]);

  return (
    <div className={`App ${mode}`}>
      {loggedInUser && (
        <h1 className="welcome-message">Trades of {loggedInUser}</h1>
      )}

      {userId && (
        <p style={{ textAlign: 'center', color: '#aaa' }}>
          <strong>User ID:</strong> {userId}
        </p>
      )}

      <div className="listof-trades">
        {loading ? (
          <p className="response">⏳ Loading trades...</p>
        ) : error ? (
          <p className="response" style={{ color: 'salmon' }}>{error}</p>
        ) : trades.length === 0 ? (
          <p className="response">No trades recorded yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', paddingLeft: 0, textAlign: 'center' }}>
            {trades.map((item, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                {item.type === 'buy' ? '🟢 Bought' : '🔴 Sold'} {item.quantity} shares of <strong>{item.stock_symbol.toUpperCase()}</strong>
                {item.trader_id && item.type === 'sell' ? ` to User ${item.trader_id}` : ''}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="buttons">
        <button
          type="button"
          className="trades-to-frontpage-button"
          onClick={() => navigate('/frontpage')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default TradesTracker;
