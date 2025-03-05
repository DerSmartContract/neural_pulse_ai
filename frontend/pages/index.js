export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-center text-white">
      {/* Titel */}
      <h1 className="text-4xl md:text-5xl font-bold text-neon-green animate-glow">
        Neuronale Pulse AI
      </h1>

      {/* Status-Anzeige */}
      <p className="mt-4 text-lg md:text-xl font-semibold">
        <span className="text-gray-400">Status:</span>{" "}
        <span className="text-red-500 animate-pulse">Fehler</span>
      </p>
      <p className="text-lg md:text-xl font-semibold">
        <span className="text-gray-400">Potential:</span> N/A
      </p>

      {/* Button mit Hover-Effekt & Ladeanimation */}
      <button className="mt-6 px-6 py-3 flex items-center gap-2 bg-neon-green hover:bg-green-500 transition-all duration-200 text-black font-semibold rounded-lg shadow-lg animate-button-glow">
        Neuen Puls abrufen
        <span className="animate-spin-slow">🔄</span>
      </button>

      {/* Footer */}
      <p className="mt-10 text-gray-500 text-sm">Neuronale Pulse AI v0.1</p>
    </div>
  );
}