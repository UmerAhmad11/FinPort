import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>FinPort</div>
      <ul className="navbar-links">
        <li onClick={() => navigate('/trade')}>Trade</li>
        <li onClick={() => navigate('/deposit')}>Deposit</li>
        <li onClick={() => navigate('/withdraw')}>Withdraw</li>
        <li onClick={() => navigate('/portfolio')}>Portfolio</li>
        <li onClick={() => navigate('/trades')}>Trades</li>
      </ul>
      <button className="logout-btn" onClick={() => {
        localStorage.removeItem('loggedInUser');
        navigate('/');
      }}>Logout</button>
    </nav>
  );
}

export default Navbar;
