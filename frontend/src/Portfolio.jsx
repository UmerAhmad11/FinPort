import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function Portfolio() {
  const [mode] = useState('portfolio');
  const userId = localStorage.getItem('userId') || '';
  const loggedInUser = localStorage.getItem('loggedInUser');
  const navigate = useNavigate();

  const [shares, setShares] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    fetch(`http://127.0.0.1:8000/api/portfolio/${userId}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.portfolio)) {
          setShares(data.portfolio);
        } else {
          setShares([]);
        }

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setShares([]);
        setError('❌ Failed to load portfolio');
        setLoading(false);
      });
  }, [userId]);

  return (
    <div className={`App ${mode}`}>
      {loggedInUser && (
        <h1 className="welcome-message">Portfolio of {loggedInUser}</h1>
      )}

      {userId && (
        <p style={{ textAlign: 'center', color: '#aaa' }}>
          <strong>User ID:</strong> {userId}
        </p>
      )}

      <div className="listof-purchases">
        {loading ? (
          <p className="response">⏳ Loading portfolio...</p>
        ) : error ? (
          <p className="response" style={{ color: 'salmon' }}>{error}</p>
        ) : shares.length === 0 ? (
          <p className="response">No stocks currently held.</p>
        ) : (
          <ul style={{ listStyle: 'none', paddingLeft: 0, textAlign: 'center' }}>
            {shares.map((item, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                💼 <strong>{item.stock_symbol.toUpperCase()}</strong> — {item.quantity} shares
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="buttons">
        <button
          type="button"
          className="portfolio-to-frontpage-button"
          onClick={() => navigate('/frontpage')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
