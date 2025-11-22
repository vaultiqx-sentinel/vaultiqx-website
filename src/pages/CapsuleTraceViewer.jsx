// CapsuleTraceViewer.jsx
// Tribute caption: "VaultiqX Breathes In Humanity" — Capsule Registry Viewer

import React from "react";
import capsuleRegistry from "../capsuleRegistry"; // ✅ fixed default import

/**
 * Capsule Trace Viewer — shows which capsules are mounted, sealed, or missing
 * Reads from capsuleRegistry.js and displays fusion anchors + lineage
 */
export default function CapsuleTraceViewer() {
  return (
    <div
      className="bg-[#0d1117] text-[#c9d1d9] min-h-screen p-10 space-y-8 font-sans"
      role="main"
    >
      {/* Tribute Caption */}
      <header className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#b8860b] animate-pulse">
          📖 Capsule Trace Viewer
        </h1>
        <p className="text-base sm:text-lg text-[#58a6ff]">
          VaultiqX: Every capsule is cockpit-synced, tribute-anchored, and fused
          with Sovereign AI + Quantum + Eternity anchors.
        </p>
      </header>

      {/* Registry Table */}
      <section className="bg-[#161b22] rounded-lg shadow-md border border-[#30363d] p-6 overflow-x-auto">
        <table className="min-w-full text-sm sm:text-base border-collapse">
          <thead>
            <tr className="text-[#58a6ff] border-b border-[#30363d]">
              <th className="px-4 py-2 text-left">Capsule ID</th>
              <th className="px-4 py-2 text-left">Route</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Fusion</th>
              <th className="px-4 py-2 text-left">Anchors</th>
              <th className="px-4 py-2 text-left">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {capsuleRegistry.map((capsule) => (
              <tr
                key={capsule.id}
                className="border-b border-[#30363d] hover:bg-[#0d1117]/50 transition"
              >
                <td className="px-4 py-2">{capsule.id}</td>
                <td className="px-4 py-2">{capsule.route}</td>
                <td className="px-4 py-2 font-semibold text-[#b8860b]">
                  {capsule.title}
                </td>
                <td className="px-4 py-2">
                  {capsule.fusion ? "✅ Sealed" : "❌ Missing"}
                </td>
                <td className="px-4 py-2">
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                    {capsule.anchors.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-2 text-[#8b949e]">
                  {capsule.lastUpdated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer className="text-center pt-10 space-y-2">
        <p className="italic text-[#b8860b] text-sm">
          Trace Viewer powered by capsuleRegistry.js
        </p>
        <p className="text-xs text-[#c9d1d9]">
          Anchors: eternumReady • originumProtected • divinumBound •
          infinitumTrace • anantumVow • vasthavumSnapshot • pranavaTrace •
          quantumEnabled • sovereignAIEnabled
        </p>
        <p className="text-[#b8860b] font-medium">Breathes In Humanity</p>
      </footer>
    </div>
  );
}