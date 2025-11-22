// App.js
// Tribute caption: "VaultiqX Breathes In Humanity" — Cockpit Root

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Capsules
import PublicCapsule from "./pages/PublicCapsule";
import GovTechDashboard from "./pages/GovTechDashboard";
import GovernanceRitualEngine from "./pages/GovernanceRitualEngine";
import SovereignEscalationGrid from "./pages/SovereignEscalationGrid";
import CapsuleTraceViewer from "./pages/CapsuleTraceViewer";
import LicenseUpgrade from "./pages/LicenseUpgrade";
import FounderAppointment from "./pages/FounderAppointment";
import TributeGame from "./pages/TributeGame";

// Guardrails
import CapsuleErrorBoundary from "./components/CapsuleErrorBoundary";
import CapsuleGuardrail from "./components/CapsuleGuardrail";

function App() {
  return (
    <Router>
      {/* Global cockpit guardrail */}
      <CapsuleErrorBoundary>
        <Routes>
          {/* Default route → Public Capsule */}
          <Route
            path="/"
            element={
              <CapsuleGuardrail>
                <PublicCapsule />
              </CapsuleGuardrail>
            }
          />

          {/* Public Capsule */}
          <Route
            path="/public"
            element={
              <CapsuleGuardrail>
                <PublicCapsule />
              </CapsuleGuardrail>
            }
          />

          {/* GovTech Dashboard */}
          <Route
            path="/govtech"
            element={
              <CapsuleGuardrail>
                <GovTechDashboard />
              </CapsuleGuardrail>
            }
          />

          {/* Governance Ritual Engine */}
          <Route
            path="/rituals"
            element={
              <CapsuleGuardrail>
                <GovernanceRitualEngine />
              </CapsuleGuardrail>
            }
          />

          {/* Sovereign Escalation Grid */}
          <Route
            path="/escalation"
            element={
              <CapsuleGuardrail>
                <SovereignEscalationGrid />
              </CapsuleGuardrail>
            }
          />

          {/* Capsule Trace Viewer */}
          <Route
            path="/registry"
            element={
              <CapsuleGuardrail>
                <CapsuleTraceViewer />
              </CapsuleGuardrail>
            }
          />

          {/* License Upgrade Capsule */}
          <Route
            path="/license-upgrade"
            element={
              <CapsuleGuardrail>
                <LicenseUpgrade />
              </CapsuleGuardrail>
            }
          />

          {/* Founder Appointment Capsule */}
          <Route
            path="/founder-appointment"
            element={
              <CapsuleGuardrail>
                <FounderAppointment />
              </CapsuleGuardrail>
            }
          />

          {/* Tribute Game Capsule */}
          <Route
            path="/tribute-game"
            element={
              <CapsuleGuardrail>
                <TributeGame />
              </CapsuleGuardrail>
            }
          />

          {/* Fallback route — unmatched paths */}
          <Route
            path="*"
            element={
              <div className="bg-[#0d1117] text-[#c9d1d9] min-h-screen flex flex-col items-center justify-center font-sans space-y-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#b8860b] animate-pulse">
                  🔐 VaultiqX Breathes In Humanity
                </h1>
                <p className="text-[#58a6ff]">
                  Cockpit route not found — lineage drift detected.
                </p>
                <p className="text-sm text-[#c9d1d9]">
                  Try /public or /govtech to enter sealed capsules.
                </p>
              </div>
            }
          />
        </Routes>
      </CapsuleErrorBoundary>
    </Router>
  );
}

export default App;