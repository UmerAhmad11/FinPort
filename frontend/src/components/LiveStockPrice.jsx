import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LiveStockPrice = ({ symbol }) => {
    const [price, setPrice] = useState(null);
    const [change, setChange] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;
    const BASE_URL = 'https://www.alphavantage.co/query';

    useEffect(() => {
        const fetchStockPrice = async () => {
            try {
                const response = await axios.get(BASE_URL, {
                    params: {
                        function: 'GLOBAL_QUOTE',
                        symbol: symbol,
                        apikey: API_KEY
                    }
                });

                if (response.data['Global Quote']) {
                    const quote = response.data['Global Quote'];
                    setPrice(parseFloat(quote['05. price']).toFixed(2));
                    setChange(parseFloat(quote['09. change']).toFixed(2));
                } else {
                    setError('No data available for this symbol');
                }
                setLoading(false);
            } catch (err) {
                setError('Error fetching stock data');
                setLoading(false);
            }
        };

        fetchStockPrice();
        // Update every 1 minute
        const interval = setInterval(fetchStockPrice, 60000);

        return () => clearInterval(interval);
    }, [symbol]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{symbol}</h3>
            <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">${price}</span>
                <span className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {change >= 0 ? '+' : ''}{change}%
                </span>
            </div>
        </div>
    );
};

export default LiveStockPrice; 