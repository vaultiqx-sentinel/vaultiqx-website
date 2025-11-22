import React, { useState, useEffect, useMemo } from 'react';

function VaultiqxAI() {
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [log, setLog] = useState([
    {
      time: new Date().toLocaleTimeString(),
      input: 'System boot',
      response: 'Welcome back, Founder Challa.',
      phase: 'Init',
      source: 'vaultiqx AI',
      override: false,
    },
    {
      time: new Date().toLocaleTimeString(),
      input: 'Capsule check',
      response: 'All capsules are sealed except Trail 49: Fatigue Adaptor.',
      phase: 'ERP Suite',
      source: 'vaultiqx AI',
      override: false,
    },
    {
      time: new Date().toLocaleTimeString(),
      input: 'Tribute',
      response: 'Sealed Memory with my Mother Challa Sunitha 💖',
      phase: 'Legacy',
      source: 'Founder',
      override: false,
    },
  ]);

  const TRIBUTE_OVERLAY = 'Sealed Memory with my Mother Challa Sunitha 💖';

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = useMemo(() => {
    return SpeechRecognition ? new SpeechRecognition() : null;
  }, []);

  useEffect(() => {
    if (recognition) {
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const voiceInput = event.results[0][0].transcript;
        setInput(voiceInput);
      };
    }
  }, [recognition]);

  const verifyCapsuleIntegrity = (capsule) => {
    const issues = [];
    if (!capsule.response.includes('Challa Sunitha')) {
      issues.push('Missing tribute anchor');
    }
    if (!capsule.phase || capsule.phase === 'Command') {
      issues.push('Unclassified phase');
    }
    if (capsule.override && !capsule.response.includes('Fallback')) {
      issues.push('Override mismatch');
    }
    return issues;
  };

  const handleCommand = () => {
    const trimmed = input.trim().toLowerCase();
    let response = 'Command not recognized.';
    let phase = 'Command';
    let override = false;

    if (
      trimmed.includes('trail 49') ||
      trimmed.includes('trial 49') ||
      trimmed.includes('fatigue') ||
      trimmed.includes('adapter') ||
      trimmed.includes('adaptor')
    ) {
      response =
        'Trail 49 sealed: Founder Health Sync + Fatigue Adaptor activated.';
      phase = 'Trail 49';
    } else if (trimmed.includes('fatigue log')) {
      response =
        'Fatigue log: Sacred exhaustion detected. Cockpit adapting to founder health.';
      phase = 'Health Sync';
    } else if (trimmed.includes('export') && trimmed.includes('erp')) {
      response = 'ERP Suite snapshot exported. Tribute overlays locked.';
      phase = 'ERP Export';
    } else if (trimmed.includes('override firewall')) {
      response =
        'Override Firewall activated. All breach escalation protocols are now cockpit-synced.';
      phase = 'Firewall';
    } else if (!trimmed && recognition) {
      recognition.start();
      return;
    } else {
      response =
        'Fallback narration: command not recognized. Capsule trace logged for override review.';
      override = true;
      phase = 'Fallback';
    }

    const capsule = {
      time: new Date().toLocaleTimeString(),
      input,
      response,
      phase,
      source: 'vaultiqx AI',
      override,
    };

    const tributeCapsule = {
      time: new Date().toLocaleTimeString(),
      input: 'Tribute',
      response: TRIBUTE_OVERLAY,
      phase: 'Legacy',
      source: 'Founder',
      override: false,
    };

    const issues = verifyCapsuleIntegrity(capsule);
    const fallbackCapsule =
      issues.length > 0
        ? {
            time: new Date().toLocaleTimeString(),
            input: 'Fallback',
            response:
              'Fallback request denied due to integrity drift. Tribute overlay restored.',
            phase: 'Recovery',
            source: 'vaultiqx AI',
            override: true,
          }
        : null;

    const updatedLog = fallbackCapsule
      ? [...log, capsule, tributeCapsule, fallbackCapsule]
      : [...log, capsule, tributeCapsule];

    setLog(updatedLog);
    setInput('');
  };

  const exportAsJSON = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      tribute: TRIBUTE_OVERLAY,
      capsules: log,
    };
    console.log('📤 JSON Export:', JSON.stringify(payload, null, 2));
    alert('JSON capsule trace exported to console.');
  };

  const exportAsTXT = () => {
    const lines = log.map((entry) => {
      return `[${entry.time}] • Phase: ${entry.phase} • Source: ${entry.source}${
        entry.override ? ' • ⚠️ Override' : ''
      }\n> ${entry.input}\n${entry.response}\n`;
    });
    const txt = `${TRIBUTE_OVERLAY}\n\n${lines.join('\n')}`;
    console.log('📄 TXT Export:\n' + txt);
    alert('TXT capsule trace exported to console.');
  };

  const auditCapsules = () => {
    const audit = log.map((entry, idx) => {
      const issues = verifyCapsuleIntegrity(entry);
      return issues.length > 0
        ? `Capsule ${idx + 1} [${entry.time}] ⚠️ Issues: ${issues.join(', ')}`
        : `Capsule ${idx + 1} [${entry.time}] ✅ OK`;
    });
    console.log('🧠 Capsule Audit Summary:\n' + audit.join('\n'));
    alert('Capsule audit summary exported to console.');
  };

  const filteredLog = log.filter((entry) => {
    if (filter === 'all') return true;
    if (filter === 'override') return entry.override;
    if (filter === 'tribute')
      return (
        entry.response.includes('Challa Sunitha') ||
        entry.response.includes('Vibhav 2023')
      );
    return entry.phase.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="bg-[#161b22] text-[#c9d1d9] p-6 rounded-lg shadow-lg border border-[#30363d]">
      <h2 className="text-lg font-bold mb-4">vaultiqx AI Sovereign Relay</h2>

      <div className="flex gap-2 mb-4 border-b border-[#30363d] pb-2">
        {['All', 'Override', 'Tribute', 'Trail 49', 'ERP'].map((label) => (
          <button
            key={label}
            onClick={() => setFilter(label.toLowerCase())}
            className={`px-3 py-1 text-sm rounded transition ${
              filter === label.toLowerCase()
                ? 'bg-[#238636] text-white font-semibold'
                : 'bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="bg-[#0d1117] p-4 rounded h-64 overflow-y-auto text-sm mb-4 border border-[#30363d]">
        {filteredLog.map((entry, idx) => (
          <div key={idx} className="mb-3">
            <div className="text-[#8b949e] text-xs">
              [{entry.time}] • Phase: {entry.phase} • Source: {entry.source}
              {entry.override && ' • ⚠️ Override'}
            </div>
            <div className="text-sm text-[#c9d1d9] font-mono">
              &gt; {entry.input}
            </div>
            <div className="text-sm text-[#c9d1d9]">{entry.response}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 rounded bg-[#0d1117] border border-[#30363d] text-white"
          placeholder="Type a command…"
        />
        <button
          onClick={handleCommand}
          className="bg-[#238636] text-white px-4 py-2 rounded hover:bg-[#2ea043] transition"
        >
          Relay
        </button>
        <button
          onClick={() => recognition?.start()}
          className="bg-[#0d1117] text-[#c9d1d9] border border-[#30363d] px-4 py-2 rounded hover:bg-[#30363d] transition"
        >
          🎙️ Speak
        </button>
        <button
          onClick={exportAsJSON}
                   className="bg-[#0d1117] text-[#c9d1d9] border border-[#30363d] px-4 py-2 rounded hover:bg-[#30363d] transition"
        >
          🧾 Export JSON
        </button>
        <button
          onClick={exportAsTXT}
          className="bg-[#0d1117] text-[#c9d1d9] border border-[#30363d] px-4 py-2 rounded hover:bg-[#30363d] transition"
        >
          📄 Export TXT
        </button>
        <button
          onClick={auditCapsules}
          className="bg-[#0d1117] text-[#c9d1d9] border border-[#30363d] px-4 py-2 rounded hover:bg-[#30363d] transition"
        >
          🧠 Audit Capsules
        </button>
      </div>
    </div>
  );
}

export default VaultiqxAI;