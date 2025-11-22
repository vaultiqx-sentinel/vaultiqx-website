// TributeGameCapsule.jsx
// VaultiqX Breathes In Humanity — Trail 30: Tribute Game Capsule Logic

import React, { useState } from 'react';

export default function TributeGameCapsule() {
  const [role, setRole] = useState('');

  const renderGame = () => {
    switch (role) {
      case 'senior':
        return (
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#58a6ff]">🧓 Memory Match</h3>
            <p className="text-sm">Match tribute symbols to their meanings. Designed for cognitive clarity and emotional recall.</p>
          </div>
        );
      case 'student':
        return (
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#58a6ff]">📚 Tribute Quiz</h3>
            <p className="text-sm">Answer questions about VaultiqX legacy, founder rituals, and civic healing logic.</p>
          </div>
        );
      case 'child':
        return (
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#58a6ff]">🎮 Symbol Hunt</h3>
            <p className="text-sm">Find hidden tribute symbols in a safe, playful interface. No ads, no distractions.</p>
          </div>
        );
      default:
        return (
          <p className="italic text-[#b8860b] mt-4">
            Select a role to begin your tribute-safe game experience.
          </p>
        );
    }
  };

  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] p-10 font-sans min-h-screen space-y-6 text-center">
      <h2 className="text-3xl font-bold text-[#58a6ff]">
        🎮 Tribute Game Capsule
      </h2>
      <p className="text-[#b8860b] text-lg animate-pulse">
        VaultiqX Breathes In Humanity
      </p>
      <p className="mt-2 text-sm">
        Choose your role to activate tribute-safe games. All logic unified in one capsule.
      </p>

      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={() => setRole('senior')}
          className="bg-[#b8860b] text-[#0d1117] px-4 py-2 rounded hover:bg-[#daa520]"
        >
          Senior
        </button>
        <button
          onClick={() => setRole('student')}
          className="bg-[#b8860b] text-[#0d1117] px-4 py-2 rounded hover:bg-[#daa520]"
        >
          Student
        </button>
        <button
          onClick={() => setRole('child')}
          className="bg-[#b8860b] text-[#0d1117] px-4 py-2 rounded hover:bg-[#daa520]"
        >
          Child
        </button>
      </div>

      <div className="mt-8">{renderGame()}</div>
    </div>
  );
}