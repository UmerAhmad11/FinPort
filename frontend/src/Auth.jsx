import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import './index.css';

export default function Auth() {
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const resetForm = () => {
    setName('');
    setEmail('');
    setUsername('');
    setPassword('');
    setMessage('');
  };

  const handleToggle = (selectedMode) => {
    setMode(selectedMode);
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password || (mode === 'signup' && (!name || !email))) {
      setMessage('⚠️ Please fill in all fields');
      return;
    }

    const endpoint = mode === 'signup' ? '/main/signup' : '/main/login';
    const payload =
      mode === 'signup'
        ? { username, password, fullname: name, email} // match backend model
        : { username, password };

    try {
      const res = await fetch(`http://127.0.0.1:8000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMsg =
          typeof data.detail === 'string'
            ? data.detail
            : JSON.stringify(data.detail || 'Something went wrong');

        setMessage(`❌ ${errorMsg}`);
        return;
      }

      // ✅ Save session info
      localStorage.setItem('loggedInUser', username);
      if (data.user_id) {
        localStorage.setItem('userId', data.user_id); // 👈 Add this
      }
      if (data.name) {
        localStorage.setItem('fullName', data.name);
      }

      setMessage(data.message);
      setTimeout(() => navigate('/frontpage'), 1000);
    } catch (err) {
      console.error(err);
      setMessage('❌ Server error, please try again');
    }
  };

  return (
    <div className="auth-bg-mountains">
      <svg className="mountain-bg-svg" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a18cd1"/>
            <stop offset="100%" stopColor="#fbc2eb"/>
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#skyGradient)"/>
        {/* Moon */}
        <circle cx="1200" cy="120" r="60" fill="#fff" fillOpacity="0.7">
          <animate attributeName="cy" values="120;140;120" dur="8s" repeatCount="indefinite"/>
        </circle>
        {/* Mountains */}
        <path d="M0 700 Q 300 600 500 700 T 1000 700 T 1440 700 V900 H0Z" fill="#7b5fa1"/>
        <path d="M0 800 Q 400 650 800 800 T 1440 800 V900 H0Z" fill="#b484b9"/>
        <path d="M0 900 Q 600 750 1440 900 V900 H0Z" fill="#fbc2eb"/>
        {/* Shooting stars */}
        <g>
          <line x1="200" y1="100" x2="300" y2="120" stroke="#fff" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="x1" values="200;1200" dur="7s" repeatCount="indefinite"/>
            <animate attributeName="x2" values="300;1300" dur="7s" repeatCount="indefinite"/>
            <animate attributeName="y1" values="100;200" dur="7s" repeatCount="indefinite"/>
            <animate attributeName="y2" values="120;220" dur="7s" repeatCount="indefinite"/>
          </line>
          <line x1="400" y1="200" x2="500" y2="220" stroke="#fff" strokeWidth="1.5" strokeLinecap="round">
            <animate attributeName="x1" values="400;1000" dur="9s" repeatCount="indefinite"/>
            <animate attributeName="x2" values="500;1100" dur="9s" repeatCount="indefinite"/>
            <animate attributeName="y1" values="200;300" dur="9s" repeatCount="indefinite"/>
            <animate attributeName="y2" values="220;320" dur="9s" repeatCount="indefinite"/>
          </line>
        </g>
      </svg>
      <div className="auth-card">
        <h2 className="auth-card-title">{mode === 'signup' ? 'Signup' : 'Login'}</h2>
        {mode === 'login' && (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="input-icon">&#128100;</span>
              <input
                placeholder="Username"
                value={username}
                className="input-pink"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <span className="input-icon">&#128274;</span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                className="input-pink"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="auth-btn">Login</button>
          </form>
        )}
        {mode === 'login' && (
          <button className="auth-link" type="button" onClick={() => handleToggle('signup')}>Signup</button>
        )}
        {mode === 'signup' && (
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <span className="input-icon">&#128100;</span>
              <input
                placeholder="Full Name"
                value={name}
                className="input-pink"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <span className="input-icon">&#9993;</span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                className="input-pink"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <span className="input-icon">&#128100;</span>
              <input
                placeholder="Username"
                value={username}
                className="input-pink"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <span className="input-icon">&#128274;</span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                className="input-pink"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="auth-btn">Signup</button>
            <button className="auth-link" type="button" onClick={() => handleToggle('login')}>Back to Login</button>
          </form>
        )}
        <p className="response">{message}</p>
      </div>
    </div>
  );
}
