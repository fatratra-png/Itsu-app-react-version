// Header.js
import React from "react";
import MoodSelector from "./MoodSelector";

export default function Header({ theme, setTheme }) {
  return (
    <header className="header">
      <div className="logo">ItsU</div>
      <MoodSelector theme={theme} setTheme={setTheme} />
    </header>
  );
}