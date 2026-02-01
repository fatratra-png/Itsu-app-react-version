import React, { useState, useEffect } from "react";

export default function NotesPanel() {
  const [notes, setNotes] = useState(localStorage.getItem("itsyou-notes") || "");
  const [saved, setSaved] = useState(false);

  const saveNotes = () => {
    localStorage.setItem("itsyou-notes", notes);
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  return (
    <section className="panel notes-panel">
      <h2>Notes</h2>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes rapides, idées, cours..."
      />
      <button onClick={saveNotes}>{saved ? "Sauvegardé ✓" : "Sauvegarder"}</button>
    </section>
  );
}
