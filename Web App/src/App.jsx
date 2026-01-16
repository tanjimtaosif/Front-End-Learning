import { useState, useEffect } from 'react';
import useTimer from './hooks/useTimer';
import { playAlarm } from './utils/audio';
import Avatar from './components/Avatar/Avatar';
import TimerDisplay from './components/TimerDisplay/TimerDisplay';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import TimeSlider from './components/TimeSlider/TimeSlider';

function App() {
  const [theme, setTheme] = useState('forest');
  const [avatarType, setAvatarType] = useState('blob');
  const [clockStyle, setClockStyle] = useState('digital');
  const [alarmTone, setAlarmTone] = useState('chime');
  const [initialMinutes, setInitialMinutes] = useState(5);
  
  const handleTimerComplete = () => {
    playAlarm(alarmTone);
  };

  const { timeLeft, isRunning, start, stop, reset, setTime } = useTimer(initialMinutes, handleTimerComplete);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate percentage for gradient position
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleTimeChange = (val) => {
    setInitialMinutes(val);
    setTime(val);
  };

  return (
    <div className="app-container">
      <header style={{ position: 'absolute', top: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', zIndex: 10 }}>
        <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
        
        <select 
          value={clockStyle} 
          onChange={(e) => setClockStyle(e.target.value)}
          className="control-select"
        >
          <option value="digital">Digital</option>
          <option value="analog">Analog-ish</option>
          <option value="minimal">Minimal</option>
        </select>
        
        <select 
          value={avatarType} 
          onChange={(e) => setAvatarType(e.target.value)}
           className="control-select"
        >
          <option value="blob">Blob Companion</option>
          <option value="robot">Robot Pal</option>
          <option value="ghost">Spooky Ghost</option>
        </select>

        <select 
          value={alarmTone} 
          onChange={(e) => setAlarmTone(e.target.value)}
           className="control-select"
        >
          <option value="chime">Chime</option>
          <option value="bell">Bell</option>
          <option value="digital">Digital</option>
        </select>
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', zIndex: 2, marginTop: '4rem' }}>
        <Avatar type={avatarType} />
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
           <TimerDisplay timeLeft={timeLeft} totalTime={initialMinutes * 60} style={clockStyle} />
           
           <TimeSlider value={initialMinutes} max={120} onChange={handleTimeChange} />
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
          <button 
            onClick={isRunning ? stop : start}
            style={{ 
              padding: '1rem 2.5rem', 
              fontSize: '1.2rem', 
              borderRadius: '2rem', 
              border: 'none', 
              background: 'var(--accent)', 
              color: '#fff', 
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'; }}
          >
            {isRunning ? 'Pause' : 'Start Focus'}
          </button>
          
          <button 
            onClick={reset}
            style={{ 
              padding: '1rem 2.5rem', 
              fontSize: '1.2rem', 
              borderRadius: '2rem', 
              border: '2px solid var(--text-primary)', 
              background: 'transparent', 
              color: 'var(--text-primary)', 
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.2s, background 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'transparent'; }}
          >
            Reset
          </button>
        </div>
      </main>
      
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, transparent 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8) 100%)`,
        zIndex: 1,
        pointerEvents: 'none',
        transition: 'background 0.1s ease-out'
      }}></div>
    </div>
  );
}

export default App;
