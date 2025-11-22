// PublicCapsule.jsx
// Tribute caption: "VaultiqX Breathes In Humanity" — Public Access Capsule

import React from "react";

export default function PublicCapsule() {
  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] font-sans min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-[#b8860b] animate-pulse">
          🔐 VaultiqX Breathes In Humanity
        </h1>
      </header>

      {/* Main content */}
      <main className="text-center space-y-4" role="main">
        <p className="text-lg">
          Founder-grade license sync and override firewall logic.
        </p>
        <p className="text-sm text-gray-400">
          This capsule is styled with Tailwind classes applied directly to the body.
        </p>
      </main>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} VaultiqX Legacy Capsule
      </footer>
    </div>
  );
}