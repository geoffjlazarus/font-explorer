import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'; // Import useLocation
import './FontDetail.css';
import Slider from './Slider';
import axios from 'axios';

export default function FontDetail({fontAdjustments, onSliderChange, sampleText, setSampleText}) {
    const { fontName } = useParams();
    const location = useLocation(); // Get the location object
    const fontFromState = location.state?.font;


    const decodedFontName = decodeURIComponent(fontName);
    const [font, setFont] = useState(location.state?.font || null); // Try to get the font from the location state first

    useEffect(() => {
        if (fontFromState) return;

    async function fetchFontDetails() {
        try {
            const response = await axios.get('/api/fonts');
            const fontDetail = response.data.find(f => f.family === decodedFontName);
            setFont(fontDetail);
        } catch (error) {
            console.error("Error fetching font details:", error);
        }
    }

    fetchFontDetails();
}, [decodedFontName, fontFromState]);
    if (!font) return <div>Loading font details...</div>;

    return (
        <div className='font-view'>
            <h2>{decodedFontName}</h2>
            {/* Add more controls and components to manipulate and showcase the font here */}

            <div style={{
                fontFamily: font.family, 
                margin: '20px 0',
                fontWeight: fontAdjustments[font.family]?.weight || 400,
                letterSpacing: fontAdjustments[font.family]?.tracking || '0px'
            }}>
                {sampleText}
            </div>

            <Slider 
                label="Weight:" 
                min={font.minWeight || 100}
                max={font.maxWeight || 900}
                step={4}
                value={fontAdjustments[font.family]?.weight || 400}
                onChange={(e) => onSliderChange(font.family, 'weight', e.target.value)}
            />
            
            <Slider 
                label="Tracking (px):" 
                min={-5}
                max={20}
                step={1}
                value={parseFloat(fontAdjustments[font.family]?.tracking || 0)}
                onChange={(e) => onSliderChange(font.family, 'tracking', e.target.value)}
            />
        </div>
    );
}
