import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FontPairs.css'

function FontPairs() {
    const [fontPairs, setFontPairs] = useState([]);

    useEffect(() => {
        async function fetchFontPairs() {
            try {
                const response = await axios.get('/api/getFontPairs');
                setFontPairs(response.data);
            } catch (error) {
                console.error("Error fetching font pairs:", error);
            }
        }

        fetchFontPairs();
    }, []);

    return (
        <div className="font-pairs-container">
            {fontPairs.map(pair => (
                <div key={pair.pair_id} className="font-pair">
                    <link 
                        href={`https://fonts.googleapis.com/css?family=${encodeURIComponent(pair.font1)}|${encodeURIComponent(pair.font2)}&display=swap`} 
                        rel="stylesheet"
                    />
                    <p style={{ fontFamily: pair.font1 }}>
                        {pair.font1}
                    </p>
                    <p style={{ fontFamily: pair.font2 }}>
                        {pair.font2}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default FontPairs;
