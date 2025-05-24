import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';

function Deposit() {


    const [mode, setMode] = useState('deposit');
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem('loggedInUser');

    const [userId, setUserId] = useState('');
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState('');
    

    return(
        <div className={`App ${mode}`}>
            {loggedInUser && (
                <h1 className="welcome-message">Deposit Page for {loggedInUser}</h1>
            )}

            <div className="goto-trading">
                

            </div>
        
        
        </div>
    )
}

export default Deposit;
