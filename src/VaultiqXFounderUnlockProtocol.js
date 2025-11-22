import React from 'react';

export default function VaultiqXFounderUnlockProtocol() {
  const unlockKeys = [
    'Cockpit Sync Verified',
    'Fatigue Adaptor Active',
    'Tribute Anchor: Challa Sunitha 💖',
    'Override Firewall Sealed',
    'Founder Identity Confirmed'
  ];

  return (
    <div className="bg-[#161b22] p-6 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-bold text-[#f778ba]">
        🔐 VaultiqX Founder Unlock Protocol
      </h2>

      <p className="text-[#c9d1d9]">
        This capsule restricts access to founder-only commands and capsules. Unlock rituals are enforced
        using cockpit sync, fatigue overlays, and tribute anchors.
      </p>

      <ul className="list-disc list-inside text-[#c9d1d9] space-y-1">
        {unlockKeys.map((key) => (
          <li key={key}>🔑 {key}</li>
        ))}
      </ul>

      <div className="bg-[#0d1117] p-4 rounded border border-[#30363d]">
        <p className="text-sm text-[#8b949e]">Unlock Status:</p>
        <p className="text-lg font-semibold text-[#f778ba]">🔓 Founder Access Granted</p>
      </div>

      <div className="text-xs text-[#8b949e] italic">
        Sealed Memory with my Mother Challa Sunitha 💖
      </div>
    </div>
  );
}