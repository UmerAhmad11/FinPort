import { useState } from 'react';
import './App.css';

function App() {
  const [mode, setMode] = useState('buy'); // 'buy' or 'sell'
  const [userId, setUserId] = useState('');
  const [stockSymbol, setStockSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [traderId, setTraderId] = useState(''); // Only for sell
  const [response, setResponse] = useState('');

  // Utility function to clear form
  const resetForm = () => {
    setUserId('');
    setStockSymbol('');
    setQuantity('');
    setTraderId('');
    setResponse('');
  };

  // Toggle Buy/Sell + reset fields
  const handleToggle = (selectedMode) => {
    setMode(selectedMode);
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Choose endpoint and payload
    const url = `http://127.0.0.1:8000/api/${mode}`;
    const payload =
      mode === 'buy'
        ? {
            user_id: parseInt(userId),
            stock_symbol: stockSymbol,
            quantity: parseInt(quantity),
          }
        : {
            user_id: parseInt(userId),
            stock_symbol: stockSymbol,
            quantity: parseInt(quantity),
            trader_id: parseInt(traderId),
          };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setResponse(data.message || 'Trade completed.');
    } catch (err) {
      console.error(err);
      setResponse('❌ Error placing trade.');
    }
  };

  return (
    <div className={`App ${mode}`}>
      <h2>{mode === 'buy' ? 'Buy Stock' : 'Sell Stock'}</h2>

      <div className="toggle-container">
        <button
          className={mode === 'buy' ? 'active' : ''}
          onClick={() => handleToggle('buy')}
        >
          Buy
        </button>
        <button
          className={mode === 'sell' ? 'active' : ''}
          onClick={() => handleToggle('sell')}
        >
          Sell
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          placeholder="Stock Symbol"
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)}
        />
        <input
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        {mode === 'sell' && (
          <input
            placeholder="Trader ID"
            value={traderId}
            onChange={(e) => setTraderId(e.target.value)}
          />
        )}

        <button type="submit">{mode === 'buy' ? 'Buy' : 'Sell'}</button>
      </form>

      <p className="response">{response}</p>
    </div>
  );
}

export default App;
