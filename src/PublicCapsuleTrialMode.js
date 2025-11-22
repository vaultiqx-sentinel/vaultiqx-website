import React, { useState } from 'react';
import TributeGameCapsule from './TributeGameCapsule';

const TRIBUTE = 'Sealed Memory with my Mother Challa Sunitha 💖';

export default function PublicCapsuleTrialMode() {
  const [log, setLog] = useState([]);

  const handlePublicCapsule = (entry) => {
    const capsule = {
      time: new Date().toLocaleTimeString(),
      source: 'public',
      tribute: TRIBUTE,
      phase: 'Public Trial',
      override: entry.override || false,
      puzzle: entry.puzzle,
      response: entry.response,
      player: entry.player,
    };
    setLog([...log, capsule]);
    console.log('🧍 Public Capsule:', capsule);
  };

  return (
    <div className="bg-[#161b22] text-[#c9d1d9] p-6 rounded-lg border border-[#30363d] mt-8">
      <h2 className="text-lg font-bold mb-4">🧍 Public Capsule Trial Mode</h2>
      <p className="text-sm mb-4 italic text-[#8b949e]">
        Tribute-masked, override-proof simulation for students, seniors, children, and general users.
      </p>

      <TributeGameCapsule onCapsuleLog={handlePublicCapsule} />

      <div className="mt-6 bg-[#0d1117] p-4 rounded border border-[#30363d] h-48 overflow-y-auto text-sm">
        {log.map((entry, idx) => (
          <div key={idx} className="mb-3">
            <div className="text-[#8b949e] text-xs">
              [{entry.time}] • Player: {entry.player} • Phase: {entry.phase}
              {entry.override && ' • ⚠️ Override'}
            </div>
            <div className="text-sm text-[#c9d1d9]">{entry.tribute}</div>
            <div className="text-sm text-[#c9d1d9]">Puzzle: {entry.puzzle}</div>
            <div className="text-sm text-[#c9d1d9]">Response: {entry.response}</div>
          </div>
        ))}
      </div>
    </div>
  );
}