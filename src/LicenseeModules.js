import React, { useState } from 'react';

const TRIBUTE = 'Sealed Memory with my Mother Challa Sunitha 💖';

export function LicenseeExportCapsule() {
  const [licensee, setLicensee] = useState('');
  const [exportLog, setExportLog] = useState([]);

  const handleExport = () => {
    if (!licensee.trim()) {
      alert('Licensee name required.');
      return;
    }

    const capsule = {
      time: new Date().toLocaleTimeString(),
      licensee,
      status: 'Exported',
      tribute: TRIBUTE,
      metadata: {
        phase: 'Licensee Capsule',
        cockpitSync: true,
        overrideSafe: true,
      },
    };

    setExportLog([...exportLog, capsule]);
    setLicensee('');
    console.log('📤 Licensee Export Capsule:', capsule);
    alert(`Capsule exported for ${licensee}`);
  };

  return (
    <div className="bg-[#161b22] text-[#c9d1d9] p-6 rounded-lg border border-[#30363d] mb-6">
      <h2 className="text-lg font-bold mb-4">📤 Licensee Export Capsule</h2>

      <input
        type="text"
        value={licensee}
        onChange={(e) => setLicensee(e.target.value)}
        placeholder="Enter licensee name…"
        className="w-full mb-4 p-2 rounded bg-[#0d1117] border border-[#30363d] text-white"
      />

      <button
        onClick={handleExport}
        className="bg-[#238636] text-white px-4 py-2 rounded hover:bg-[#2ea043] transition"
      >
        Export Capsule
      </button>

      <div className="mt-6 bg-[#0d1117] p-4 rounded border border-[#30363d] h-48 overflow-y-auto text-sm">
        {exportLog.map((entry, idx) => (
          <div key={idx} className="mb-3">
            <div className="text-[#8b949e] text-xs">
              [{entry.time}] • Licensee: {entry.licensee} • Phase: {entry.metadata.phase}
            </div>
            <div className="text-sm text-[#c9d1d9]">{entry.tribute}</div>
            <div className="text-sm text-[#c9d1d9]">Status: {entry.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LicenseeSyncCapsule() {
  const [licensee, setLicensee] = useState('');
  const [puzzleAnswer, setPuzzleAnswer] = useState('');
  const [log, setLog] = useState([]);

  const puzzle = {
    question: 'I am not alive, but I grow. I don’t have lungs, but I need air. What am I?',
    answer: 'fire',
  };

  const handleSubmit = () => {
    if (!licensee.trim()) {
      alert('Licensee name required.');
      return;
    }

    const isCorrect = puzzleAnswer.trim().toLowerCase() === puzzle.answer;
    const capsule = {
      time: new Date().toLocaleTimeString(),
      licensee,
      tribute: TRIBUTE,
      puzzle: puzzle.question,
      response: isCorrect
        ? 'Puzzle solved. Licensee sync capsule sealed.'
        : 'Incorrect answer. Capsule logged with override flag.',
      override: !isCorrect,
      phase: 'Licensee Sync',
      cockpitSync: true,
    };

    setLog([...log, capsule]);
    setLicensee('');
    setPuzzleAnswer('');
    console.log('🧩 Licensee Sync Capsule:', capsule);
    alert(isCorrect ? 'Puzzle solved and capsule sealed.' : 'Incorrect answer logged.');
  };

  return (
    <div className="bg-[#161b22] text-[#c9d1d9] p-6 rounded-lg border border-[#30363d]">
      <h2 className="text-lg font-bold mb-4">🔄 Licensee Sync Capsule</h2>

      <input
        type="text"
        value={licensee}
        onChange={(e) => setLicensee(e.target.value)}
        placeholder="Enter licensee name…"
        className="w-full mb-3 p-2 rounded bg-[#0d1117] border border-[#30363d] text-white"
      />

      <div className="mb-3 text-sm">
        <strong>Puzzle:</strong> {puzzle.question}
      </div>

      <input
        type="text"
        value={puzzleAnswer}
        onChange={(e) => setPuzzleAnswer(e.target.value)}
        placeholder="Your answer…"
        className="w-full mb-4 p-2 rounded bg-[#0d1117] border border-[#30363d] text-white"
      />

      <button
        onClick={handleSubmit}
        className="bg-[#238636] text-white px-4 py-2 rounded hover:bg-[#2ea043] transition"
      >
        Submit Capsule
      </button>

      <div className="mt-6 bg-[#0d1117] p-4 rounded border border-[#30363d] h-48 overflow-y-auto text-sm">
        {log.map((entry, idx) => (
          <div key={idx} className="mb-3">
            <div className="text-[#8b949e] text-xs">
              [{entry.time}] • Licensee: {entry.licensee} • Phase: {entry.phase}
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