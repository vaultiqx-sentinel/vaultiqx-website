import React, { useState } from 'react';

const TRIBUTE = 'Sealed Memory with my Mother Challa Sunitha 💖';

export default function TributeGameCapsule() {
  const [player, setPlayer] = useState('');
  const [answer, setAnswer] = useState('');
  const [log, setLog] = useState([]);

  const puzzle = {
    question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?',
    answer: 'echo',
  };

  const handleSubmit = () => {
    if (!player.trim()) {
      alert('Player name required.');
      return;
    }

    const isCorrect = answer.trim().toLowerCase() === puzzle.answer;
    const capsule = {
      time: new Date().toLocaleTimeString(),
      player,
      tribute: TRIBUTE,
      puzzle: puzzle.question,
      response: isCorrect
        ? 'Correct. Tribute game capsule sealed.'
        : 'Incorrect. Capsule logged with override flag.',
      override: !isCorrect,
      phase: 'Tribute Game',
      cockpitSync: true,
    };

    setLog([...log, capsule]);
    setPlayer('');
    setAnswer('');
    console.log('🎮 Tribute Game Capsule:', capsule);
    alert(isCorrect ? 'Correct answer sealed.' : 'Incorrect answer logged.');
  };

  return (
    <div className="bg-[#161b22] text-[#c9d1d9] p-6 rounded-lg border border-[#30363d] mt-8">
      <h2 className="text-lg font-bold mb-4">🎮 Tribute Game Capsule</h2>

      <input
        type="text"
        value={player}
        onChange={(e) => setPlayer(e.target.value)}
        placeholder="Enter player name…"
        className="w-full mb-3 p-2 rounded bg-[#0d1117] border border-[#30363d] text-white"
      />

      <div className="mb-3 text-sm">
        <strong>Puzzle:</strong> {puzzle.question}
      </div>

      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Your answer…"
        className="w-full mb-4 p-2 rounded bg-[#0d1117] border border-[#30363d] text-white"
      />

      <button
        onClick={handleSubmit}
        className="bg-[#238636] text-white px-4 py-2 rounded hover:bg-[#2ea043] transition"
      >
        Submit Answer
      </button>

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