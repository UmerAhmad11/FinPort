import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

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

    const endpoint = mode === 'signup' ? '/api/signup' : '/api/login';

    try {
      const res = await fetch(`http://127.0.0.1:8000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(`❌ ${data.detail || 'Something went wrong'}`);
        return;
      }

      // Success: store session and redirect
      localStorage.setItem('loggedInUser', username);
      setMessage(data.message);
      setTimeout(() => navigate('/trade'), 1000);
    } catch (err) {
      console.error(err);
      setMessage('❌ Server error, please try again');
    }
  };

  return (
    <div className="App auth">
      <h2>{mode === 'signup' ? 'Sign Up' : 'Login'}</h2>

      <div className="toggle-container">
        <button
          className={mode === 'login' ? 'active' : ''}
          onClick={() => handleToggle('login')}
        >
          Login
        </button>
        <button
          className={mode === 'signup' ? 'active' : ''}
          onClick={() => handleToggle('signup')}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {mode === 'signup' && (
          <>
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </>
        )}
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{mode === 'signup' ? 'Sign Up' : 'Login'}</button>
      </form>

      <p className="response">{message}</p>
    </div>
  );
}
