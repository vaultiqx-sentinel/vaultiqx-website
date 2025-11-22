// src/cockpit/UI/NotFoundCapsule.jsx
// Tribute-safe fallback for unknown routes
// Ensures no blank screens in VaultiqX

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundCapsule() {
  return (
    <div className="bg-[#161b22] text-[#c9d1d9] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-[#f85149] mb-4">
        404 — Capsule Not Found
      </h1>
      <p className="text-lg text-[#b8860b] mb-6 italic">
        VaultiqX Breathes In Humanity, but this route is not sealed yet.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#58a6ff] text-[#0d1117] rounded-lg font-semibold hover:bg-[#1f6feb]"
      >
        Return to Homepage
      </Link>
    </div>
  );
}