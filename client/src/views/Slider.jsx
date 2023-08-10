import './Slider.css'

export default function Slider({ label, min, max, step, value, onChange }) {
    return (
        <div className="slider-text">
            <label>{label}</label>
            <input 
                type="range" 
                min={min} 
                max={max}
                step={step} 
                value={value}
                onChange={onChange}
            />
        </div>
    );
}


