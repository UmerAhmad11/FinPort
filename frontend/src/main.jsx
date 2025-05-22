// Import core React libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the new main App component (with router)
import App from './App.jsx';
// Import global CSS styles
import './index.css';

// Mount the App to the root <div> in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
