
import Slider from "./Slider";
import './FontCard.css'

export default function FontCard({ font, fontAdjustments, onSliderChange, sampleText, setSampleText, cssVars }) {
    return (
        <div className="font-card" style={cssVars}>
            <h3>
            {/* <h3 style={{ fontFamily: font.family }}> */}
                {font.family}
            </h3>

            <div style={{
                fontFamily: font.family, 
                margin: '20px 0',
                fontWeight: fontAdjustments[font.family]?.weight || 100,
                letterSpacing: fontAdjustments[font.family]?.tracking || '0px',
                // fontVariationSettings: `
                //     "wdth" ${fontAdjustments[font.family]?.width || 100}, 
                //     "opsz" ${fontAdjustments[font.family]?.opticalSize || 16}, 
                //     "slnt" ${fontAdjustments[font.family]?.slant || 0}, 
                //     "ital" ${fontAdjustments[font.family]?.italic || 0}
                // `
            }}>
                {sampleText}
            </div>
            
            <Slider 
                label="Weight:" 
                min={font.minWeight || 100}
                max={font.maxWeight || 900}
                step={1}
                value={fontAdjustments[font.family]?.weight || 400}
                onChange={(e) => {
                    console.log("Slider changed for property: weight", e.target.value)
                    onSliderChange(font.family, 'weight', e.target.value)}}
            />
            
            <Slider 
                label="Tracking (px):" 
                min={-5}
                max={20}
                step={1}
                value={parseFloat(fontAdjustments[font.family]?.tracking || 0)}
                onChange={(e) => onSliderChange(font.family, 'tracking', e.target.value)}
            />
            <Slider 
                label="Width (wdth):" 
                min={font.minWidth || 50} // Adjust based on font limits
                max={font.maxWidth || 200}
                step={1}
                value={fontAdjustments[font.family]?.width || 100}
                onChange={(e) => onSliderChange(font.family, 'width', e.target.value)}
            />

            <Slider 
                label="Optical Size (opsz):" 
                min={font.minOpticalSize || 16} 
                max={font.maxOpticalSize || 72}
                step={0.1}
                value={fontAdjustments[font.family]?.opticalSize || 16}
                onChange={(e) => onSliderChange(font.family, 'opticalSize', e.target.value)}
            />

            <Slider 
                label="Slant (slnt):" 
                min={font.minSlant || -30} 
                max={font.maxSlant || 30}
                step={1}
                value={fontAdjustments[font.family]?.slant || 0}
                onChange={(e) => onSliderChange(font.family, 'slant', e.target.value)}
            />

            <Slider 
                label="Italic (ital):" 
                min={0} 
                max={1}
                step={0.1}
                value={fontAdjustments[font.family]?.italic || 0}
                onChange={(e) => onSliderChange(font.family, 'italic', e.target.value)}
            />

        </div>
    );
}