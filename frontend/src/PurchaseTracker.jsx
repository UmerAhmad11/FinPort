import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function PurchaseTracker() {
  const [mode] = useState('purchases');
  const userId = localStorage.getItem('userId') || '';
  const loggedInUser = localStorage.getItem('loggedInUser');
  const navigate = useNavigate();

  const [purchases, setPurchases] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
  
    fetch(`http://127.0.0.1:8000/api/purchases/${userId}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.purchases)) {
          setPurchases(data.purchases);
        } else {
          setPurchases([]);
        }
  
        setLoading(false); // ✅ Set loading to false after success
      })
      .catch(err => {
        console.error(err);
        setPurchases([]);
        setError('❌ Failed to load purchases'); // Optional error message
        setLoading(false); // ✅ Set loading to false after failure
      });
  }, [userId]);
  
  

  return (
    <div className={`App ${mode}`}>
      {loggedInUser && (
        <h1 className="welcome-message">Purchases of {loggedInUser}</h1>
      )}

      {userId && (
        <p style={{ textAlign: 'center', color: '#aaa' }}>
          <strong>User ID:</strong> {userId}
        </p>
      )}

      <div className="listof-purchases">
        {loading ? (
          <p className="response">⏳ Loading purchases...</p>
        ) : error ? (
          <p className="response" style={{ color: 'salmon' }}>{error}</p>
        ) : purchases.length === 0 ? (
          <p className="response">No purchases recorded yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', paddingLeft: 0, textAlign: 'center' }}>
            {purchases.map((item, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                📈 {item.stock_symbol.toUpperCase()} — {item.quantity} shares
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="buttons">
        <button
          type="button"
          className="purchase-to-frontpage-button"
          onClick={() => navigate('/frontpage')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default PurchaseTracker;
