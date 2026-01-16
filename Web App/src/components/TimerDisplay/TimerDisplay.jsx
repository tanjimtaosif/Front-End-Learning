import React from 'react';
import './TimerDisplay.scss';

const TimerDisplay = ({ timeLeft, totalTime, style = 'digital' }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  const progress = (timeLeft / totalTime) * 100;

  if (style === 'analog') {
    const size = 250;
    const center = size / 2;
    const radius = 100;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;
    
    // Calculate marker angle (radians) for the dot at the tip
    // Progress 100% -> 0 offset (full circle) -> start at top (-90deg in CSS or calculcated here)
    // We rotated SVG -90deg so 0 is at 12 o'clock relative to screen.
    // Progress goes clockwise. 
    // Angle in SVG (after rotation): range 0 to 2*PI.
    const angle = (progress / 100) * 2 * Math.PI; // 0 to 2PI
    const markerX = center + radius * Math.cos(angle);
    const markerY = center + radius * Math.sin(angle);

    // Generate 60 ticks
    const ticks = [];
    for (let i = 0; i < 60; i++) {
        const tickAngle = (i / 60) * 2 * Math.PI;
        const tickLength = i % 5 === 0 ? 10 : 5; // Long tick every 5 mins
        const innerR = radius - 20;
        const outerR = innerR + tickLength;
        
        const x1 = center + innerR * Math.cos(tickAngle);
        const y1 = center + innerR * Math.sin(tickAngle);
        const x2 = center + outerR * Math.cos(tickAngle);
        const y2 = center + outerR * Math.sin(tickAngle);
        
        // Determine if tick is "active" (passed or future?)
        // Let's make ticks "active" if they are covered by the progress duration?
        // Actually, usually a timer counts down. 
        // If timeLeft shrinking, progress shrinking. 
        // Let's light up ticks that represent REMAINING time.
        // Ticks go 0..60. 
        // If progress is 50%, we want ticks from 0 to 30 (or 30 to 60?)
        // Let's light up 0 to current progress angle.
        
        const isTickActive = (i / 60) * 100 <= progress;

        ticks.push(
            <line 
                key={i} 
                x1={x1} y1={y1} x2={x2} y2={y2} 
                className={`track-ticks ${isTickActive ? 'tick-active' : ''}`} 
            />
        );
    }

    return (
      <div className="timer-display timer-display--analog">
         <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            {/* Ticks */}
            {ticks}

            {/* Background Track */}
            <circle cx={center} cy={center} r={radius} className="track-bg" />
            
            {/* Progress Arc */}
            <circle 
                cx={center} cy={center} r={radius} 
                className="progress-bar"
                strokeDasharray={circumference} 
                strokeDashoffset={offset} 
            />

            {/* Marker Dot */}
            <circle cx={markerX} cy={markerY} r="6" className="marker-dot" fill="#fff" />
         </svg>
         
         <div className="digital-overlay">
            <div className="time">{formattedTime}</div>
            <div className="label">MIN LEFT</div>
         </div>
      </div>
    );
  }

  return (
    <div className={`timer-display timer-display--${style}`}>
      {formattedTime}
    </div>
  );
};

export default TimerDisplay;
