import React from 'react';

export default function VaultiqXPublicRelayNarrator() {
  const narrationEvents = [
    'Public Capsule Activated',
    'Tribute Game Started',
    'Emergency Signal Detected',
    'Fallback Location Logic Engaged',
    'Police + Ambulance Notified',
    'Capsule Sealed with Tribute Overlay'
  ];

  return (
    <div className="bg-[#161b22] p-6 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-bold text-[#ffa657]">
        📣 VaultiqX Public Relay Narrator
      </h2>

      <p className="text-[#c9d1d9]">
        This capsule narrates public capsule events, civic signals, and tribute overlays in real time.
        It ensures override firewalls and tribute masking are enforced for all public users.
      </p>

      <ul className="list-disc list-inside text-[#c9d1d9] space-y-1">
        {narrationEvents.map((event) => (
          <li key={event}>🗣️ {event}</li>
        ))}
      </ul>

      <div className="bg-[#0d1117] p-4 rounded border border-[#30363d]">
        <p className="text-sm text-[#8b949e]">Narration Status:</p>
        <p className="text-lg font-semibold text-[#ffa657]">📣 Public Narration Active</p>
      </div>

      <div className="text-xs text-[#8b949e] italic">
        Sealed Memory with my Mother Challa Sunitha 💖
      </div>
    </div>
  );
}