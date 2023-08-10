
import Slider from "./Slider";

export default function FontCard({ font, fontAdjustments, onSliderChange, sampleText, setSampleText }) {
    return (
        <div className="single-font">
            <h3>
            {/* <h3 style={{ fontFamily: font.family }}> */}
                {font.family}
            </h3>

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