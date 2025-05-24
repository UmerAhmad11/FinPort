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
                <h1 className="welcome-message">Welcome, {loggedInUser} 👋</h1>
            )}

            <div className="goto-trading">
                <button
                    type="button"
                    className="goto-trading-button"
                    onClick={() => navigate('/trade')}
                >
                    Go to Trading
                </button>
            </div>
        
        
        </div>
    )
}

export default FrontPage;
