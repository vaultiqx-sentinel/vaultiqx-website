import React, { useState } from 'react';
import { TRIBUTE_OVERLAY, applyTribute } from './TributeEngine';
import {
  LicenseeExportCapsule,
  LicenseeSyncCapsule
} from './LicenseeModules';
import TributeGameCapsule from './TributeGameCapsule';

export default function LicenseeSovereignSync() {
  const [log, setLog] = useState([]);
  const [licensee, setLicensee] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    if (!licensee.trim()) return;
    setAuthenticated(true);
    const capsule = applyTribute({
      input: 'Licensee Login',
      response: `Licensee ${licensee} authenticated. Sovereign sync initiated.`,
      phase: 'Licensee Sync',
      source: 'licensee',
    });
    setLog([...log, capsule]);
  };

  const handleAction = (action) => {
    const isOverride = action.toLowerCase().includes('cockpit');
    const response = isOverride
      ? '⚠️ Access denied. Founder cockpit is override-protected.'
      : `✅ ${action} executed successfully.`;

    const capsule = applyTribute({
      input: action,
      response,
      phase: 'Licensee Sync',
      override: isOverride,
      source: 'licensee',
    });

    setLog([...log, capsule]);
  };

  return (
    <div className="bg-[#161b22] text-[#c9d1d9] p-6 rounded-lg border border-[#30363d] mt-8">
      <h2 className="text-lg font-bold mb-4">🔐 Licensee Sovereign Sync Finalizer</h2>
      <p className="text-sm mb-4 italic text-[#8b949e]">
        Simulates licensee access. Enforces tribute masking, cockpit isolation, and override firewall.
      </p>

      {!authenticated ? (
        <>
          <input
            type="text"
            value={licensee}
            onChange={(e) => setLicensee(e.target.value)}
            placeholder="Enter licensee name…"
            className="w-full mb-4 p-2 rounded bg-[#0d1117] border border-[#30363d] text-white"
          />
          <button
            onClick={handleLogin}
            className="bg-[#238636] text-white px-4 py-2 rounded hover:bg-[#2ea043] transition"
          >
            Authenticate
          </button>
        </>
      ) : (
        <>
          <div className="mb-4">
            <LicenseeExportCapsule />
            <LicenseeSyncCapsule />
            <TributeGameCapsule />
          </div>

          <div className="flex gap-2 mb-4">
            <button
              onClick={() => handleAction('Export Licensee Data')}
              className="bg-[#0d1117] text-[#c9d1d9] border border-[#30363d] px-3 py-1 rounded hover:bg-[#30363d]"
            >
              Export Data
            </button>
            <button
              onClick={() => handleAction('Sync Licensee Capsule')}
              className="bg-[#0d1117] text-[#c9d1d9] border border-[#30363d] px-3 py-1 rounded hover:bg-[#30363d]"
            >
              Sync Capsule
            </button>
            <button
              onClick={() => handleAction('Access Founder Cockpit')}
              className="bg-[#da3633] text-white px-3 py-1 rounded hover:bg-[#f85149]"
            >
              Attempt Override
            </button>
          </div>
        </>
      )}

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