import { useState } from 'react'
import './App.css'

function App() {
  const [userId, setUserId] = useState('');
  const [stockSymbol, setStockSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [response, setResponse] = useState('');


  // Function called when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default HTML form behavior (reload)

        // Build a trade request object from input fields
    const tradeData = {
      user_id: parseInt(userId),
      stock_symbol: stockSymbol,
      quantity: parseInt(quantity)
    };

    try {
      // Make a POST request to the FastAPI backend
      const res = await fetch('http://127.0.0.1:8000/api/buy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tradeData)  // Convert JS object to JSON
      });

      // Convert the response to JSON and set it in state
      const data = await res.json();
      setResponse(data.message || 'Trade successful!');
    } catch (err) {
      // Handle any errors
      console.error(err);
      setResponse('Error placing trade.');
    }
  };


  // JSX to render the form and display the response
  return (
    <div className="App">
      <h2>Buy Stock</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />
        <input placeholder="Stock Symbol" value={stockSymbol} onChange={e => setStockSymbol(e.target.value)} />
        <input placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
        <button type="submit">Buy</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default App
