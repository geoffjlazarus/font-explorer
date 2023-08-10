import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TypeViewer.css'
import FontCard from './FontCard';

const MAX_FONTS = 5;

export default function TypeViewer() {
    const [fonts, setFonts] = useState([]);
    const [selectedFonts, setSelectedFonts] = useState([]);
    const [fontAdjustments, setFontAdjustments] = useState({});
    const [sampleText, setSampleText] = useState("The quick brown fox jumps over the lazy dog.");


    useEffect(() => {
        fetchFonts();
    }, []);

    useEffect(() => {
        const randomSelectFonts = () => {
            if (!fonts.length) return;
    
            const tempFonts = [];
            while (tempFonts.length < MAX_FONTS) {
                const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
                if (!tempFonts.includes(randomFont)) {
                    tempFonts.push(randomFont);
                }
            }
            setSelectedFonts(tempFonts);
        };
        randomSelectFonts();
    }, [fonts]);

    useEffect(() => {
        const loadSelectedFonts = () => {
            selectedFonts.forEach(font => {
                const link = document.createElement('link');
                link.href = `https://fonts.googleapis.com/css?family=${encodeURIComponent(font.family)}&display=swap`;
                link.rel = 'stylesheet';
                document.head.appendChild(link);
            });
        };

        loadSelectedFonts();
    }, [selectedFonts]);

    const fetchFonts = async () => {
        try {
            const response = await axios.get('/api/fonts');
            setFonts(response.data.slice(0, 50)); // Grab the top 50 fonts
        } catch (error) {
            console.error("Error fetching fonts:", error);
        }
    };

    const handleSliderChange = (fontFamily, property, value) => {
        const adjustments = {
            width: `'wdth' ${value}`,
            tracking: `${value}px`
        };

        const adjustedValue = adjustments[property] || value;

        setFontAdjustments(prev => ({
            ...prev,
            [fontFamily]: {
                ...prev[fontFamily],
                [property]: adjustedValue
            }
        }));
    };

    const refreshFonts = () => {
        const tempFonts = [];
        while (tempFonts.length < MAX_FONTS) {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            if (!tempFonts.includes(randomFont)) {
                tempFonts.push(randomFont);
            }
        }
        setSelectedFonts(tempFonts);
    };

    return (
        <div className='font-view'>
            
            <div className='input-block'>
                <input 
                type="text" 
                placeholder="The quick brown fox jumps over the lazy dog." 
                value={sampleText} 
                onChange={(e) => setSampleText(e.target.value)} />
                
                <button onClick={refreshFonts}>Refresh Fonts</button>
            </div>


            {selectedFonts.map(font => (
                
                <FontCard 
                    key={font.family} 
                    font={font} 
                    fontAdjustments={fontAdjustments} 
                    onSliderChange={handleSliderChange}
                    sampleText={sampleText}
                />
            ))}
        </div>
    );
}