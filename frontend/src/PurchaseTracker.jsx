import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';

function PurchaseTracker() {

    const [mode] = useState('purchases');
    const [userId] = useState(localStorage.getItem('userId') || '');
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem('loggedInUser');


    return(
        <div className={`App ${mode}`}>
          {loggedInUser && (
            <h1 className="welcome-message">Purchases of {loggedInUser}</h1>
          )}
      
        </div>
    )


    

}

export default PurchaseTracker;