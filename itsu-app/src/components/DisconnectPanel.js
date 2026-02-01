import React, { useEffect, useRef } from "react";

export default function DisconnectPanel({ disconnect, reconnect }) {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
    return () => audioRef.current.pause();
  }, []);

  if (reconnect) {
    return (
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#000", color: "#fff", textAlign: "center", padding: "20px" }}>
        <div>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>À tout à l’heure</h1>
          <p style={{ fontSize: "1.4rem", marginBottom: "2.5rem", opacity: 0.9 }}>
            Respire profondément.<br />Reviens quand tu te sens prêt.
          </p>
          <button onClick={reconnect} style={{ padding: "16px 40px", background: "#e63946", color: "white", border: "none", borderRadius: "999px", fontSize: "1.2rem", fontWeight: 600, cursor: "pointer" }}>
            Revenir à ItsU
          </button>
        </div>
        <audio ref={audioRef} src="/calm-sound.mp3" loop />
      </div>
    );
  }

  return (
    <button onClick={disconnect} id="disconnectBtn">Mode déconnexion</button>
  );
}
