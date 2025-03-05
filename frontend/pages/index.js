import { useEffect, useState } from "react";

export default function Home() {
  const [pulse, setPulse] = useState(null);

  const fetchPulse = async () => {
    try {
      const res = await fetch("http://localhost:8000/pulse");
      const data = await res.json();
      setPulse(data);
    } catch (error) {
      console.error("API-Fehler:", error);
      setPulse({ status: "Fehler", potential: "N/A" });
    }
  };

  useEffect(() => {
    fetchPulse();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Neuronale Pulse AI</h1>
      <p><strong>Status:</strong> {pulse?.status ?? "Lade..."}</p>
      <p><strong>Potential:</strong> {pulse?.potential ?? "Lade..."}</p>
      <button onClick={fetchPulse} style={{ marginTop: "20px", padding: "10px", cursor: "pointer" }}>
        Neuen Puls abrufen 🔄
      </button>
    </div>
  );
}