// src/cockpit/UI/VaultiqXWebsiteApp.js
// VaultiqX Breathes In Humanity

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import VaultiqXWebsiteHome from './VaultiqXWebsiteHome';
import VaultiqXPublicCapsuleTrial from './VaultiqXPublicCapsuleTrial';
import VaultiqXFounderCockpit from './VaultiqXFounderCockpit';
import VaultiqXAppointmentRequestCapsule from './VaultiqXAppointmentRequestCapsule';
import CapsuleErrorBoundary from '../../components/CapsuleErrorBoundary';

import LicenseUpgrade from '../../capsules/license/LicenseUpgrade';
import TributeGameCapsule from '../../capsules/game/TributeGameCapsule';

function VaultiqXWebsiteApp() {
  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] font-sans min-h-screen p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-[#58a6ff]">
        🚀 VaultiqX Website — Public & Founder Capsules
      </h1>
      <p className="text-center text-[#b8860b] font-medium text-lg animate-pulse">
        VaultiqX Breathes In Humanity
      </p>

      <Routes>
        <Route path="/" element={<VaultiqXWebsiteHome />} />
        <Route path="/public" element={<VaultiqXWebsiteHome />} />
        <Route path="/public-capsule" element={<VaultiqXPublicCapsuleTrial />} />
        <Route path="/founder-cockpit" element={<VaultiqXFounderCockpit />} />
        <Route path="/appointment-capsule" element={<VaultiqXAppointmentRequestCapsule />} />
        <Route
          path="/licensee-upgrade"
          element={
            <CapsuleErrorBoundary capsuleName="LicenseUpgrade">
              <LicenseUpgrade />
            </CapsuleErrorBoundary>
          }
        />
        <Route path="/license-upgrade" element={<Navigate to="/licensee-upgrade" />} />
        <Route
          path="/tribute-game"
          element={
            <CapsuleErrorBoundary capsuleName="TributeGameCapsule">
              <TributeGameCapsule />
            </CapsuleErrorBoundary>
          }
        />
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
  );
}

export default VaultiqXWebsiteApp;