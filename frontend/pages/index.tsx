"use client";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Fehler");
  const [potential, setPotential] = useState("N/A");
  const [loading, setLoading] = useState(false);

  const fetchNewPulse = async () => {
    setLoading(true);
    
    // Simulierte Wartezeit für API Call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Zufällige Erfolgschance (70% Chance auf "Erfolg")
    const isSuccess = Math.random() > 0.3;
    const newStatus = isSuccess ? "Erfolg" : "Fehler";
    const newPotential = isSuccess ? `${Math.floor(Math.random() * 100)}%` : "N/A";

    setStatus(newStatus);
    setPotential(newPotential);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-center text-white">
      {/* Titel mit Glow */}
      <h1 className="text-4xl md:text-5xl font-bold text-neon-green animate-glow">
        Neuronale Pulse AI
      </h1>

      {/* Dynamischer Status */}
      <p className="mt-4 text-lg md:text-xl font-semibold">
        <span className="text-gray-400">Status:</span>{" "}
        <span className={`${status === "Fehler" ? "text-red-500 animate-pulse" : "text-green-500"}`}>
          {status}
        </span>
      </p>

      {/* Dynamisches Potential */}
      <p className="text-lg md:text-xl font-semibold">
        <span className="text-gray-400">Potential:</span>{" "}
        <span className="text-neon-green">{potential}</span>
      </p>

      {/* Button mit Lade-Animation */}
      <button
        className="mt-6 px-6 py-3 flex items-center gap-2 bg-neon-green hover:bg-green-500 transition-all duration-200 text-black font-semibold rounded-lg shadow-lg animate-button-glow disabled:opacity-50"
        onClick={fetchNewPulse}
        disabled={loading}
      >
        {loading ? "Abrufen..." : "Neuen Puls abrufen"}
        {loading ? <span className="animate-spin">🔄</span> : "⚡"}
      </button>

      {/* Footer */}
      <p className="mt-10 text-gray-500 text-sm">Neuronale Pulse AI v0.2</p>
    </div>
  );
}