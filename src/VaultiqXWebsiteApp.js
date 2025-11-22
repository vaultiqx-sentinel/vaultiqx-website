// VaultiqXWebsiteApp.js
// VaultiqX Breathes In Humanity

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Public & Founder Capsules
import VaultiqXWebsiteHome from './cockpit/UI/VaultiqXWebsiteHome';
import VaultiqXPublicCapsuleTrial from './cockpit/UI/VaultiqXPublicCapsuleTrial';
import VaultiqXFounderCockpit from './cockpit/UI/VaultiqXFounderCockpit';
import VaultiqXAppointmentRequestCapsule from './cockpit/UI/VaultiqXAppointmentRequestCapsule';
import LicenseUpgrade from './capsules/license/LicenseUpgrade';

// Error Boundary
import CapsuleErrorBoundary from './components/CapsuleErrorBoundary';

function VaultiqXWebsiteApp() {
  return (
    <Router>
      <div className="bg-[#0d1117] text-[#c9d1d9] font-sans min-h-screen p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-[#58a6ff]">
          🚀 VaultiqX Website — Public & Founder Capsules
        </h1>
        <p className="text-center text-[#b8860b] font-medium text-lg animate-pulse">
          VaultiqX Breathes In Humanity
        </p>

        <Routes>
          {/* ✅ Default route for localhost:3000 */}
          <Route path="/" element={<VaultiqXWebsiteHome />} />

          {/* 🌐 Public Homepage */}
          <Route path="/public" element={<VaultiqXWebsiteHome />} />

          {/* 🧒 Public Capsule Trial */}
          <Route path="/public-capsule" element={<VaultiqXPublicCapsuleTrial />} />

          {/* 🧠 Founder Cockpit */}
          <Route path="/founder-cockpit" element={<VaultiqXFounderCockpit />} />

          {/* 📩 Appointment Request Capsule */}
          <Route path="/appointment-capsule" element={<VaultiqXAppointmentRequestCapsule />} />

          {/* 🔐 License Upgrade Capsule */}
          <Route
            path="/licensee-upgrade"
            element={
              <CapsuleErrorBoundary capsuleName="LicenseUpgrade">
                <LicenseUpgrade />
              </CapsuleErrorBoundary>
            }
          />
          <Route path="/license-upgrade" element={<Navigate to="/licensee-upgrade" />} />

          {/* ❌ Fallback Route */}
          <Route
            path="*"
            element={
              <div className="text-center p-10">
                <h2 className="text-xl font-bold">404 — Capsule Not Found</h2>
                <p className="italic text-[#b8860b] mt-2">
                  VaultiqX Breathes In Humanity, but this route does not exist.
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default VaultiqXWebsiteApp;