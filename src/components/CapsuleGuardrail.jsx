// CapsuleGuardrail.jsx
// Tribute caption: "VaultiqX Breathes In Humanity" — Secondary Error Guardrail Capsule

import React from "react";

/**
 * Equal fusion flags — Sovereign AI + Quantum + Eternity anchors
 */
const fusionFlags = Object.freeze({
  eternumReady: true,
  originumProtected: true,
  divinumBound: true,
  infinitumTrace: true,
  anantumVow: true,
  vasthavumSnapshot: true,
  pranavaTrace: true,
  quantumEnabled: true,
  sovereignAIEnabled: true,
});

export default class CapsuleGuardrail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("[AUDIT] CapsuleGuardrail caught:", {
      error,
      errorInfo,
      anchors: fusionFlags,
      at: new Date().toISOString(),
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="bg-[#0d1117] text-[#c9d1d9] min-h-screen p-10 space-y-8 font-sans text-center"
          role="alert"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-[#b8860b] animate-pulse">
            🚨 Capsule Guardrail Triggered
          </h1>
          <p className="text-base sm:text-lg text-[#58a6ff]">
            Tribute-safe fallback engaged. Cockpit remains override‑safe.
          </p>
          <p className="text-sm text-[#c9d1d9]">
            Error: {this.state.error?.toString()}
          </p>
          <footer className="pt-10 space-y-2">
            <p className="italic text-[#b8860b] text-sm">
              Fusion active: SovereignAI • Quantum • Eternity anchors
            </p>
            <p className="text-xs text-[#c9d1d9]">
              eternumReady • originumProtected • divinumBound • infinitumTrace •
              anantumVow • vasthavumSnapshot • pranavaTrace
            </p>
            <p className="text-[#b8860b] font-medium">Breathes In Humanity</p>
          </footer>
        </div>
      );
    }

    return this.props.children;
  }
}