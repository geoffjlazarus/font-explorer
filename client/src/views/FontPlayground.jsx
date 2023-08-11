import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FontPlayground.css'

export default function FontPlayground() {
    const [fonts, setFonts] = useState([]);
    const [selectedFont, setSelectedFont] = useState(null);
    //const [userText, setUserText] = useState(placeholder);

    let placeholder = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis purus quis ante sollicitudin fringilla. Vivamus ac mi hendrerit, condimentum lectus ac, maximus metus. Morbi laoreet massa et enim finibus faucibus. Donec et erat consectetur quam convallis aliquam. Suspendisse potenti. Fusce porttitor magna at ornare suscipit. Aenean finibus lorem sem, tincidunt luctus eros varius ut. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras orci urna, porttitor non vehicula ut, accumsan eu nisl. Praesent volutpat a leo et aliquet. Integer efficitur magna ac eros pretium, eget eleifend sem congue. Sed rhoncus laoreet rhoncus. Donec nisl massa, aliquet non aliquet ut, egestas eu odio. Vivamus feugiat elit non diam euismod, ut imperdiet tellus facilisis. Donec sit amet sem felis. Nunc imperdiet, turpis aliquam efficitur fringilla, nulla tellus ultrices erat, et dignissim metus nisl sed sapien. Praesent mollis eros vel fringilla posuere. Sed ornare venenatis neque, quis posuere ligula dictum eget. Vivamus auctor gravida ultricies. Maecenas vitae leo in urna vestibulum dapibus vitae eu quam. Curabitur rhoncus neque est, sed varius enim congue nec. Quisque sit amet sapien tristique, pulvinar nulla in, placerat felis.
    `

    const [userText, setUserText] = useState(placeholder);

    useEffect(() => {
        fetchFonts();
    }, []);

    useEffect(() => {
        if (fonts.length) {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            setSelectedFont(randomFont);
            const link = document.createElement('link');
            link.href = `https://fonts.googleapis.com/css?family=${encodeURIComponent(randomFont.family)}&display=swap`;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
    }, [fonts]);

    const fetchFonts = async () => {
        try {
            const response = await axios.get('/api/fonts');
            setFonts(response.data.slice(0, 50)); // Grab the top 50 fonts
        } catch (error) {
            console.error("Error fetching fonts:", error);
        }
    };

    const refreshFont = () => {
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        setSelectedFont(randomFont);
        const link = document.createElement('link');
        link.href = `https://fonts.googleapis.com/css?family=${encodeURIComponent(randomFont.family)}&display=swap`;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    };

    const [fontColor, setFontColor] = useState("#000000");
    const [textAlign, setTextAlign] = useState("left");
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [fontSize, setFontSize] = useState(48);


    const textStyle = {
        fontFamily: selectedFont ? selectedFont.family : 'sans-serif',
        color: fontColor,
        textAlign: textAlign,
        fontWeight: isBold ? 'bold' : 'normal',
        fontStyle: isItalic ? 'italic' : 'normal',
        textDecoration: isUnderline ? 'underline' : 'none',
        fontSize: `${fontSize}px`,
        marginTop: '20px'
    };

    return (
        <div className="font-playground">
            <h2>Font Playground</h2>
            
            {selectedFont && (
                <>
                    <div>
                        
                        <h2>{selectedFont.family}</h2>
                    </div>
                    <div className='text-features'>
                        <button onClick={refreshFont}>Change Font</button>
                        <br/>

                        {/* Font Style Toggles */}
                        <span onClick={() => setIsBold(!isBold)} style={{ fontWeight: isBold ? 'bold' : 'normal' }}>B</span>
                        <span onClick={() => setIsItalic(!isItalic)} style={{ fontStyle: isItalic ? 'italic' : 'normal' }}>I</span>
                        <span onClick={() => setIsUnderline(!isUnderline)} style={{ textDecoration: isUnderline ? 'underline' : 'none' }}>U</span>

                        {/* Font Size Slider */}
                        <label htmlFor="fontSize">Font Size</label>
                        <input 
                            type="range" 
                            min="12" 
                            max="100" 
                            value={fontSize} 
                            onChange={e => setFontSize(e.target.value)} 
                        />

                        {/* Color Picker */}
                        <label htmlFor="fontColor">Font Color: </label>
                        <input 
                            type="color" 
                            id="fontColor"
                            value={fontColor} 
                            onChange={e => setFontColor(e.target.value)} 
                        />

                        {/* Alignment Buttons */}
                        <div className="alignment-buttons">
                            <button onClick={() => setTextAlign("left")} className={textAlign === "left" ? "active" : ""}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" data-name="Layer 1" viewBox="0 0 32 40" x="0px" y="0px"><title>expand-textalign</title><path d="M4,5.63H28a1,1,0,0,0,0-2H4a1,1,0,1,0,0,2Z"/><path d="M4,13.21H22a1,1,0,1,0,0-2H4a1,1,0,0,0,0,2Z"/><path d="M28,18.79H4a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z"/><path d="M14.84,26.37H4a1,1,0,0,0,0,2H14.84a1,1,0,0,0,0-2Z"/><text x="0" y="47" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by HideMaru</text><text x="0" y="52" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>


                            </button>
                            <button onClick={() => setTextAlign("center")} className={textAlign === "center" ? "active" : ""}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" data-name="Layer 1" viewBox="0 0 32 40" x="0px" y="0px"><title>expand-textalign</title><path d="M4,5.63H28a1,1,0,0,0,0-2H4a1,1,0,1,0,0,2Z"/><path d="M7.61,11.21a1,1,0,1,0,0,2H24.39a1,1,0,0,0,0-2Z"/><path d="M28,18.79H4a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z"/><path d="M22.61,26.37H9.39a1,1,0,0,0,0,2H22.61a1,1,0,0,0,0-2Z"/><text x="0" y="47" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by HideMaru</text><text x="0" y="52" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>
                            
                            
                            </button>
                            <button onClick={() => setTextAlign("right")} className={textAlign === "right" ? "active" : ""}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" data-name="Layer 1" viewBox="0 0 32 40" x="0px" y="0px"><title>expand-textalign</title><path d="M4,5.63H28a1,1,0,0,0,0-2H4a1,1,0,1,0,0,2Z"/><path d="M28,11.21H10a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z"/><path d="M28,18.79H4a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z"/><path d="M28,26.37H17.16a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z"/><text x="0" y="47" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by HideMaru</text><text x="0" y="52" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>


                            </button>
                            <button onClick={() => setTextAlign("justify")} className={textAlign === "justify" ? "active" : ""}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" data-name="Layer 1" viewBox="0 0 32 40" x="0px" y="0px"><title>expand-textalign</title><path d="M4,5.63H28a1,1,0,0,0,0-2H4a1,1,0,1,0,0,2Z"/><path d="M28,11.21H4a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z"/><path d="M28,18.79H4a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z"/><path d="M28,26.37H4a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z"/><text x="0" y="47" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by HideMaru</text><text x="0" y="52" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>


                            </button>
                        </div>

                        <div className='input-block'>
                            <input 
                                type="text" 
                                placeholder="Enter your custom text here..."  
                                value={userText} 
                                onChange={e => setUserText(e.target.value)}  
                            />
                        </div>
                    </div>
                    <div style={textStyle}>
                        {userText}
                    </div>
                </>
            )}
        </div>
    );
    
}


 
