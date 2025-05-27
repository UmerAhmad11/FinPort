import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';

function FrontPage() {


    const [mode, setMode] = useState('frontpage');
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem('loggedInUser');
    


    return(
        <div className={`App ${mode}`}>
            {loggedInUser && (
                <h1 className="welcome-message">Welcome to FinPort, {loggedInUser} 👋</h1>
            )}

            <div className="goto-trading">
                <button
                    type="button"
                    className="goto-trading-button"
                    onClick={() => navigate('/trade')}
                >
                    Go to Trading
                </button>
                <button
                    type="button"
                    className="front-to-login-button"
                    onClick={() => {
                        localStorage.removeItem('loggedInUser'); // ✅ Log out
                        navigate('/'); // ✅ Redirect to login
                    }}
                >
                    Log Out
                </button>
                <button
                    type="button"
                    className="goto-deposit-button"
                    onClick={() => navigate('/deposit')}
                >
                    Go to Deposit
                </button>

            </div>

            <div className="goto-trades">
                <button
                    type="button"
                    className="goto-trades-button"
                    onClick={() => navigate('/trades')}
                >
                    Track Your Trades
                </button>

                <button
                    type="button"
                    className="front-to-portfolio-button"
                    onClick={() => navigate('/portfolio')}
                >
                    View Portfolio
                </button>

                <button
                    type="button"
                    className="goto-withdraw-button"
                    onClick={() => navigate('/withdraw')}
                >
                    Go to Withdraw
                </button>
            </div>
        
        
        </div>
    )
}

export default FrontPage;
