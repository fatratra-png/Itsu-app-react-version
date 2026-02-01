import React, { useState, useEffect, useRef } from "react";

export default function TimerPanel() {
  const times = [300, 600, 900, 1200];
  const [timerTime, setTimerTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null);
  const intervalRef = useRef(null);

  const formatTime = (s) => {
    const min = String(Math.floor(s / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTimerTime((t) => {
          if (t <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            alert("Temps écoulé ! Prends une vraie pause.");
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const selectTime = (t, i) => {
    setTimerTime(t);
    setActiveBtn(i);
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  return (
    <section className="panel timer-panel">
      <h2>Chill Timer</h2>
      <div className="timer-controls">
        {times.map((t, i) => (
          <button
            key={i}
            className={`time-btn ${activeBtn === i ? "active" : ""}`}
            onClick={() => selectTime(t, i)}
          >
            {t / 60} min
          </button>
        ))}
      </div>
      <div className="timer-display">{formatTime(timerTime)}</div>
      <div className="timer-actions">
        <button onClick={() => setRunning(true)} disabled={running || timerTime === 0}>
          Démarrer
        </button>
        <button onClick={() => { setRunning(false); clearInterval(intervalRef.current); }} disabled={!running}>
          Pause
        </button>
        <button
          onClick={() => { setRunning(false); setTimerTime(0); setActiveBtn(null); }}
        >
          Reset
        </button>
      </div>
    </section>
  );
}
