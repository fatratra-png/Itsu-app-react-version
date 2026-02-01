// MoodSelector.js
import React from "react";

export default function MoodSelector({ theme, setTheme }) {
  const moods = ["calm", "focus", "energy", "dark"];

  return (
    <div className="mood">
      {moods.map((m) => (
        <button
          key={m}
          className={`mood-btn ${theme === m ? "active" : ""}`}
          onClick={() => setTheme(m)}
        >
          {m.charAt(0).toUpperCase() + m.slice(1)}
        </button>
      ))}
    </div>
  );
}