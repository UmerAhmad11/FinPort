// Import core React libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the App component we created
import App from './App.jsx';
// Import global CSS styles
import './index.css';

// Tell React to render <App /> inside the root <div> in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
