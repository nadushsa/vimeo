import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [accountInfo, setAccountInfo] = useState(null);
    const [error, setError] = useState(null);

    const fetchAccountInfo = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/account');
            setAccountInfo(response.data);
            setError(null);
        } catch (error) {
            setError('Error fetching account info');
            setAccountInfo(null);
        }
    };

    return (
        <div className="App">
            <h1>Vimeo API Example</h1>
            <button onClick={fetchAccountInfo}>Fetch Account Info</button>
            {error && <p>{error}</p>}
            {accountInfo && (
                <pre>{JSON.stringify(accountInfo, null, 2)}</pre>
            )}
        </div>
    );
}

export default App;