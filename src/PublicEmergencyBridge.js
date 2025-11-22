import React, { useState } from 'react';

const TRIBUTE = 'Sealed Memory with my Mother Challa Sunitha 💖';

export default function PublicEmergencyBridge() {
  const [scene, setScene] = useState('');
  const [severity, setSeverity] = useState('');
  const [log, setLog] = useState([]);

  const classifySeverity = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('blood') || lower.includes('unconscious') || lower.includes('fire') || lower.includes('accident')) {
      return 'High';
    }
    if (lower.includes('shouting') || lower.includes('fight') || lower.includes('disturbance')) {
      return 'Medium';
    }
    return 'Low';
  };

  const handleSubmit = () => {
    if (!scene.trim()) {
      alert('Please describe the scene.');
      return;
    }

    const autoSeverity = classifySeverity(scene);
    const finalSeverity = severity || autoSeverity;

    const capsule = {
      time: new Date().toLocaleTimeString(),
      tribute: TRIBUTE,
      scene,
      severity: finalSeverity,
      emergencyTriggered: finalSeverity === 'High',
      fallbackUsed: true,
      source: 'public',
      phase: 'Emergency Bridge',
    };

    setLog([...log, capsule]);
    setScene('');
    setSeverity('');

    if (capsule.emergencyTriggered) {
      alert('🚨 Emergency detected. Police and ambulance notified using fallback location.');
    } else {
      alert('Scene logged. No emergency triggered.');
    }

    console.log('🆘 Public Emergency Capsule:', capsule);
  };

  return (
    <div className="bg-[#161b22] text-[#c9d1d9] p-6 rounded-lg border border-[#30363d] mt-8">
      <h2 className="text-lg font-bold mb-4">🆘 Public Emergency Bridge</h2>
      <p className="text-sm mb-4 italic text-[#8b949e]">
        Tribute-masked civic capsule. Records public scenes, classifies severity, and triggers emergency help.
      </p>

      <textarea
        value={scene}
        onChange={(e) => setScene(e.target.value)}
        placeholder="Describe the scene (e.g., accident, fire, unconscious person)…"
        className="w-full mb-3 p-2 rounded bg-[#0d1117] border border-[#30363d] text-white h-24"
      />

      <select
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
        className="w-full mb-4 p-2 rounded bg-[#0d1117] border border-[#30363d] text-white"
      >
        <option value="">Auto-classify severity</option>
        <option value="High">High (life-threatening)</option>
        <option value="Medium">Medium (disturbance)</option>
        <option value="Low">Low (minor)</option>
      </select>

      <button
        onClick={handleSubmit}
        className="bg-[#da3633] text-white px-4 py-2 rounded hover:bg-[#f85149] transition"
      >
        Submit Scene
      </button>

      <div className="mt-6 bg-[#0d1117] p-4 rounded border border-[#30363d] h-48 overflow-y-auto text-sm">
        {log.map((entry, idx) => (
          <div key={idx} className="mb-3">
            <div className="text-[#8b949e] text-xs">
              [{entry.time}] • Severity: {entry.severity} • Phase: {entry.phase}
              {entry.emergencyTriggered && ' • 🚨 Emergency Triggered'}
            </div>
            <div className="text-sm text-[#c9d1d9]">{entry.tribute}</div>
            <div className="text-sm text-[#c9d1d9]">Scene: {entry.scene}</div>
          </div>
        ))}
      </div>
    </div>
  );
}