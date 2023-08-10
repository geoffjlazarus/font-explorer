import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FontPairs.css'

function FontPairs() {
    const [fontPairs, setFontPairs] = useState([]);

    const fetchFontPairs = async () => {
        try {
            const response = await axios.get('/api/getFontPairs');
            setFontPairs(response.data);
        } catch (error) {
            console.error("Error fetching font pairs:", error);
        }
    };

    useEffect(() => {
        fetchFontPairs();
    }, []);

    const fontFamilies = fontPairs.map(pair => `${pair.font1}|${pair.font2}`).join('|');

    return (
        <div className="font-pairs-container">
            <h2>Explore randomised font pairs</h2>
            <button onClick={fetchFontPairs}>Refresh</button>
            <link 
                href={`https://fonts.googleapis.com/css?family=${encodeURIComponent(fontFamilies)}&display=swap`} 
                rel="stylesheet"
            />
            {fontPairs.map(pair => (
                <div key={pair.pair_id} className="font-pair">
                    <p style={{ fontFamily: pair.font1 }}>
                        {pair.font1}: The quick brown fox jumps over the lazy dog
                    </p>
                    <p style={{ fontFamily: pair.font2 }}>
                        {pair.font2}: The quick brown fox jumps over the lazy dog
                    </p>
                </div>
            ))}
        </div>
    );
}

export default FontPairs;
