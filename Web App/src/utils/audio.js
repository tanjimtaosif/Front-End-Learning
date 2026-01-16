export const playAlarm = (type = 'chime') => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const ctx = new AudioContext();
  const now = ctx.currentTime;
  const gain = ctx.createGain();
  gain.connect(ctx.destination);

  if (type === 'chime') {
    // Gentle Major 7th Chord
    const notes = [261.63, 329.63, 392.00, 493.88]; // C4, E4, G4, B4
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      
      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(0.1, now + 0.1 + (index * 0.05));
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + 4);
      
      osc.connect(noteGain);
      noteGain.connect(gain);
      osc.start(now);
      osc.stop(now + 4.5);
    });
  } else if (type === 'bell') {
    // Simple Bell-like tone (Sine + Overtones)
    const baseFreq = 523.25; // C5
    [1, 2, 3, 4.2].forEach((ratio, i) => {
       const osc = ctx.createOscillator();
       const noteGain = ctx.createGain();
       osc.type = 'sine';
       osc.frequency.value = baseFreq * ratio;
       
       const duration = 2 / ratio;
       noteGain.gain.setValueAtTime(0, now);
       noteGain.gain.linearRampToValueAtTime(0.1 / (i+1), now + 0.05);
       noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

       osc.connect(noteGain);
       noteGain.connect(gain);
       osc.start(now);
       osc.stop(now + duration + 0.1);
    });

  } else if (type === 'digital') {
     // Classic beep
    const osc = ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.setValueAtTime(880, now + 0.1);
    osc.frequency.setValueAtTime(0, now + 0.11);
    osc.frequency.setValueAtTime(880, now + 0.2);
    osc.frequency.setValueAtTime(880, now + 0.3);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.setValueAtTime(0, now + 0.4);

    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.5);
  }
};
