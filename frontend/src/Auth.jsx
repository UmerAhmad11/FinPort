import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
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
      if (mode === 'signup') {
        localStorage.setItem('fullName', name);
      }

      setMessage(data.message);
      setTimeout(() => navigate('/frontpage'), 1000);
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
              className="input-default"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              className="input-default"
              onChange={(e) => setEmail(e.target.value)}
            />
          </>
        )}
        <input
          placeholder="Username"
          value={username}
          className="input-default"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="input-default"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{mode === 'signup' ? 'Sign Up' : 'Login'}</button>
      </form>

      <p className="response">{message}</p>
    </div>
  );
}
