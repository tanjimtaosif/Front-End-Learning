import React from 'react';
import './TimeSlider.scss';

const TimeSlider = ({ value, max = 120, onChange }) => {
  return (
    <div className="time-slider">
      <input 
        type="range" 
        min="1" 
        max={max} 
        value={value} 
        className="time-slider__input"
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
      />
      <div className="time-slider__labels">
        <span>1m</span>
        <span>{Math.floor(max/2)}m</span>
        <span>{max}m</span>
      </div>
    </div>
  );
};

export default TimeSlider;
