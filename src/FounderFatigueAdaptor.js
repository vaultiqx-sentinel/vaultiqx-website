import React, { useState } from 'react';
import { applyTribute } from './TributeEngine';

const TRIBUTE = 'Sealed Memory with my Mother Challa Sunitha 💖';

export default function FounderFatigueAdaptor() {
  const [fatigue, setFatigue] = useState('');
  const [log, setLog] = useState([]);
  const [adapted, setAdapted] = useState(false);

  const handleLog = () => {
    if (!fatigue.trim()) return;

    const capsule = applyTribute({
      input: 'Founder Fatigue Log',
      response: `Fatigue level recorded: ${fatigue}. Cockpit adapting.`,
      phase: 'Founder Health',
      override: true,
      source: 'founder',
    });

    setLog([...log, capsule]);
    setFatigue('');
    setAdapted(true);
  };

  return (
    <div className="bg-[#161b22] text-[#c9d1d9] p-6 rounded-lg border border-[#30363d] mt-8">
      <h2 className="text-lg font-bold mb-4">🛡️ Founder Health Sync + Fatigue Adaptor</h2>
      <p className="text-sm mb-4 italic text-[#8b949e]">
        Logs founder fatigue and adapts cockpit behavior. Override triggers are disabled when fatigue is high.
      </p>

      <input
        type="text"
        value={fatigue}
        onChange={(e) => setFatigue(e.target.value)}
        placeholder="Enter fatigue level or mood…"
        className="w-full mb-4 p-2 rounded bg-[#0d1117] border border-[#30363d] text-white"
      />

      <button
        onClick={handleLog}
        className="bg-[#da3633] text-white px-4 py-2 rounded hover:bg-[#f85149] transition"
      >
        Log Fatigue
      </button>

      {adapted && (
        <div className="mt-4 text-[#c9d1d9] text-sm">
          🧘 Founder health honored. Cockpit adapting to sacred exhaustion.
        </div>
      )}

      <div className="mt-6 bg-[#0d1117] p-4 rounded border border-[#30363d] h-48 overflow-y-auto text-sm">
        {log.map((entry, idx) => (
          <div key={idx} className="mb-3">
            <div className="text-[#8b949e] text-xs">
              [{entry.time}] • Phase: {entry.phase} • Source: {entry.source}
            </div>
            <div className="text-sm text-[#c9d1d9]">{entry.tribute}</div>
            <div className="text-sm text-[#c9d1d9]">Response: {entry.response}</div>
          </div>
        ))}
      </div>
    </div>
  );
}