import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoPanel from "./components/TodoPanel";
import NotesPanel from "./components/NotesPanel";
import TimerPanel from "./components/TimerPanel";
import QuotePanel from "./components/QuotePanel";
import DisconnectPanel from "./components/DisconnectPanel";

function App() {
  const [theme, setTheme] = useState("calm");
  const [disconnected, setDisconnected] = useState(false);

  if (disconnected) {
    return <DisconnectPanel reconnect={() => setDisconnected(false)} />;
  }

  return (
    <div className="app" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <TodoPanel />
        <NotesPanel />
        <TimerPanel />
        <QuotePanel />
        <DisconnectPanel disconnect={() => setDisconnected(true)} />
      </main>
    </div>
  );
}

export default App;
