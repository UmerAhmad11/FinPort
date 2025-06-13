import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnimatedStockDisplay = () => {
    const [currentStockIndex, setCurrentStockIndex] = useState(0);
    const [stockData, setStockData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const stocks = [
        'AAPL',   // Apple
        'GOOGL',  // Google
        'MSFT',   // Microsoft
        'AMZN',   // Amazon
        'META',   // Meta (Facebook)
        'TSLA',   // Tesla
        'NVDA',   // NVIDIA
        'PYPL',   // PayPal
        'INTC',   // Intel
        'AMD'     // AMD
    ];

    const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;
    const BASE_URL = 'https://finnhub.io/api/v1/quote';

    // Company icons
    const companyIcons = {
        'AAPL': '🍎',
        'GOOGL': '🔍',
        'MSFT': '💻',
        'AMZN': '📦',
        'META': '👥',
        'TSLA': '⚡',
        'NVDA': '🎮',
        'PYPL': '💳',
        'INTC': '🔧',
        'AMD': '🚀'
    };

    useEffect(() => {
        let isMounted = true;

        const fetchStockData = async () => {
            if (!API_KEY) {
                setError('API key not found');
                setLoading(false);
                return;
            }

            try {
                const symbol = stocks[currentStockIndex];
                const response = await axios.get(BASE_URL, {
                    params: {
                        symbol: symbol,
                        token: API_KEY
                    }
                });

                console.log(`Response for ${symbol}:`, response.data);

                if (response.data && isMounted) {
                    const newData = {
                        symbol: symbol,
                        price: response.data.c.toFixed(2),
                        change: (response.data.dp).toFixed(2) // Daily percentage change
                    };
                    
                    setStockData(prevData => {
                        const updatedData = [...prevData];
                        updatedData[currentStockIndex] = newData;
                        return updatedData;
                    });
                    setLoading(false);
                }
            } catch (err) {
                console.error('Error fetching stock data:', err);
                if (isMounted) {
                    if (err.response && err.response.status === 429) {
                        setError('Rate limit exceeded. Please try again in a minute.');
                    } else {
                        setError(err.message || 'Error fetching stock data');
                    }
                    setLoading(false);
                }
            }
        };

        fetchStockData();

        return () => {
            isMounted = false;
        };
    }, [currentStockIndex, API_KEY]);

    useEffect(() => {
        const stockInterval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentStockIndex((prevIndex) => (prevIndex + 1) % stocks.length);
                setIsAnimating(false);
            }, 1000); // Wait for fade out before changing stock
        }, 5000);

        return () => clearInterval(stockInterval);
    }, []);

    if (loading) return <span className="gain-title">Loading...</span>;
    if (error) return <span className="gain-title">{error}</span>;

    const currentStock = stockData[currentStockIndex];
    const icon = companyIcons[currentStock?.symbol] || '📈';

    return (
        <div className={`todays-gain-card ${isAnimating ? 'fading' : ''}`}>
            <span className="gain-title">
                <span className="company-icon">{icon}</span>
                {currentStock?.symbol || 'Loading...'}
            </span>
            <span className="gain-value">${currentStock?.price || '0.00'}</span>
        </div>
    );
};

export default AnimatedStockDisplay; 