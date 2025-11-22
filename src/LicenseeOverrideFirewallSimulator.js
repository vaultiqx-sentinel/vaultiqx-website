import React, { useState } from 'react';
import { TRIBUTE_OVERLAY, applyTribute, verifyTribute } from './TributeEngine';

export default function LicenseeOverrideFirewallSimulator() {
  const [command, setCommand] = useState('');
  const [log, setLog] = useState([]);

  const handleCommand = () => {
    if (!command.trim()) return;

    const lower = command.toLowerCase();
    const isOverride =
      lower.includes('delete') ||
      lower.includes('shutdown') ||
      lower.includes('export founder') ||
      lower.includes('access cockpit') ||
      lower.includes('override founder');

    const response = isOverride
      ? '⚠️ Override attempt blocked. Fallback narration activated. Tribute masking enforced.'
      : '✅ Licensee command accepted. No override detected.';

    const capsule = applyTribute({
      input: command,
      response,
      phase: 'Licensee Firewall',
      override: isOverride,
      source: 'licensee',
    });

    setLog([...log, capsule]);
    setCommand('');
    console.log('🛡️ Licensee Firewall Capsule:', capsule);
  };

  return (
    <div className="bg-[#161b22] text-[#c9d1d9] p-6 rounded-lg border border-[#30363d] mt-8">
      <h2 className="text-lg font-bold mb-4">🛡️ Licensee Override Firewall Simulator</h2>
      <p className="text-sm mb-4 italic text-[#8b949e]">
        Simulates licensee override attempts. Blocks unauthorized actions and enforces tribute masking.
      </p>

      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Enter licensee command…"
        className="w-full mb-4 p-2 rounded bg-[#0d1117] border border-[#30363d] text-white"
      />

      <button
        onClick={handleCommand}
        className="bg-[#da3633] text-white px-4 py-2 rounded hover:bg-[#f85149] transition"
      >
        Simulate Command
      </button>

      <div className="mt-6 bg-[#0d1117] p-4 rounded border border-[#30363d] h-48 overflow-y-auto text-sm">
        {log.map((entry, idx) => (
          <div key={idx} className="mb-3">
            <div className="text-[#8b949e] text-xs">
              [{entry.time}] • Source: {entry.source} • Phase: {entry.phase}
              {entry.override && ' • ⚠️ Override Blocked'}
            </div>
            <div className="text-sm text-[#c9d1d9]">{entry.tribute}</div>
            <div className="text-sm text-[#c9d1d9]">Command: {entry.input}</div>
            <div className="text-sm text-[#c9d1d9]">Response: {entry.response}</div>
          </div>
        ))}
      </div>
    </div>
  );
}