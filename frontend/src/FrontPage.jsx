import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Frontpage.css';


function FrontPage() {


    const [mode] = useState('frontpage');
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem('loggedInUser');
    


    return(
        <div className="frontpage-bg-mountains">
            <svg className="mountain-bg-svg" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="frontSkyGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7b5fa1"/>
                        <stop offset="100%" stopColor="#2572b6"/>
                    </linearGradient>
                </defs>
                <rect width="1440" height="900" fill="url(#frontSkyGradient)"/>
                {/* Moon */}
                <circle cx="200" cy="120" r="60" fill="#fff" fillOpacity="0.7">
                    <animate attributeName="cy" values="120;140;120" dur="8s" repeatCount="indefinite"/>
                </circle>
                {/* Mountains */}
                <path d="M0 700 Q 300 600 500 700 T 1000 700 T 1440 700 V900 H0Z" fill="#2572b6"/>
                <path d="M0 800 Q 400 650 800 800 T 1440 800 V900 H0Z" fill="#7b5fa1"/>
                <path d="M0 900 Q 600 750 1440 900 V900 H0Z" fill="#b484b9"/>
                {/* Shooting stars */}
                <g>
                    <line x1="1200" y1="100" x2="1300" y2="120" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                        <animate attributeName="x1" values="1200;200" dur="7s" repeatCount="indefinite"/>
                        <animate attributeName="x2" values="1300;300" dur="7s" repeatCount="indefinite"/>
                        <animate attributeName="y1" values="100;200" dur="7s" repeatCount="indefinite"/>
                        <animate attributeName="y2" values="120;220" dur="7s" repeatCount="indefinite"/>
                    </line>
                    <line x1="1000" y1="200" x2="1100" y2="220" stroke="#fff" strokeWidth="1.5" strokeLinecap="round">
                        <animate attributeName="x1" values="1000;400" dur="9s" repeatCount="indefinite"/>
                        <animate attributeName="x2" values="1100;500" dur="9s" repeatCount="indefinite"/>
                        <animate attributeName="y1" values="200;300" dur="9s" repeatCount="indefinite"/>
                        <animate attributeName="y2" values="220;320" dur="9s" repeatCount="indefinite"/>
                    </line>
                </g>
            </svg>
            <div className="frontpage-card large">
                {loggedInUser && (
                    <h1 className="frontpage-welcome">Welcome to <span>FinPort</span>, {loggedInUser} 👋</h1>
                )}
                <div className="frontpage-actions cards">
                    <div className="frontpage-action-card" onClick={() => navigate('/trade')}>
                        <span className="action-icon">💹</span>
                        <span className="action-label">Go to Trading</span>
                    </div>
                    <div className="frontpage-action-card" onClick={() => navigate('/deposit')}>
                        <span className="action-icon">💰</span>
                        <span className="action-label">Go to Deposit</span>
                    </div>
                    <div className="frontpage-action-card" onClick={() => navigate('/trades')}>
                        <span className="action-icon">📈</span>
                        <span className="action-label">Track Your Trades</span>
                    </div>
                    <div className="frontpage-action-card" onClick={() => navigate('/portfolio')}>
                        <span className="action-icon">🗂️</span>
                        <span className="action-label">View Portfolio</span>
                    </div>
                    <div className="frontpage-action-card" onClick={() => navigate('/withdraw')}>
                        <span className="action-icon">🏦</span>
                        <span className="action-label">Go to Withdraw</span>
                    </div>
                    <div className="frontpage-action-card logout" onClick={() => {
                        localStorage.removeItem('loggedInUser');
                        navigate('/');
                    }}>
                        <span className="action-icon">🚪</span>
                        <span className="action-label">End Trading Session</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage;
