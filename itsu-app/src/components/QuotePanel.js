import React, { useState } from "react";

const quotes = [
  "Chaque pas compte, même les plus petits.",
  "Tu es plus fort que tes excuses d’hier.",
  "La constance bat le talent quand le talent ne travaille pas.",
  "Respire. Tu es exactement là où tu dois être.",
  "Le progrès silencieux est le plus puissant.",
  "Commence avant d’être prêt. C’est comme ça qu’on grandit.",
  "Un jour difficile ≠ un mauvais parcours.",
  "Ton futur toi te remercie déjà.",
];

export default function QuotePanel() {
  const [quote, setQuote] = useState("Clique sur « Nouvelle citation » pour commencer");

  const newQuote = () => {
    setQuote("");
    setTimeout(() => setQuote(quotes[Math.floor(Math.random() * quotes.length)]), 300);
  };

  return (
    <section className="panel quote-panel">
      <h2>Inspiration du moment</h2>
      <div className="quote-box">
        <p>{quote}</p>
        <button onClick={newQuote}>Nouvelle citation</button>
      </div>
    </section>
  );
}
