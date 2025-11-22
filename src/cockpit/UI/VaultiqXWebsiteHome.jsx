// VaultiqXWebsiteHome.jsx
// Tribute caption: "VaultiqX Breathes In Humanity" — Public & Founder Capsules Homepage

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheckIcon,
  CalendarIcon,
  PuzzlePieceIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

export default function VaultiqXWebsiteHome() {
  const navigate = useNavigate();

  const capsules = [
    {
      title: 'License VaultiqX Capsule',
      description:
        'Activate VaultiqX licensing for civic teams, enterprise partners, and sovereign cockpit sync.',
      icon: ShieldCheckIcon,
      route: '/license-upgrade',
    },
    {
      title: 'Founder Appointment Capsule',
      description:
        'Request a founder appointment with override-safe fallback and capsule trace.',
      icon: CalendarIcon,
      route: '/appointment',
    },
    {
      title: 'Tribute Request Capsule',
      description:
        'Initiate tribute capsule request for VaultiqX founder-grade upgrade.',
      icon: PuzzlePieceIcon,
      route: '/tribute-game',
    },
    {
      title: 'Public Access Capsule',
      description:
        'Access public capsule with VaultiqX-only layers, Unity Civic Terms, and license-ready fallback.',
      icon: GlobeAltIcon,
      route: '/public',
    },
    {
      title: 'GovTech Dashboard',
      description:
        'Governance heat maps, citizen reports, and quantum simulations for civic response.',
      icon: GlobeAltIcon,
      route: '/govtech',
    },
    {
      title: 'Governance Ritual Engine',
      description:
        'Compile policies into executable rituals with SLA timers and lineage anchors.',
      icon: PuzzlePieceIcon,
      route: '/rituals',
    },
    {
      title: 'Sovereign Escalation Grid',
      description:
        'Override-safe routing DNA with quorum approvals and lineage trace.',
      icon: ShieldCheckIcon,
      route: '/escalation',
    },
    {
      title: 'Capsule Registry Viewer',
      description:
        'Trace all capsules, fusion anchors, and lineage updates from capsuleRegistry.js.',
      icon: ShieldCheckIcon,
      route: '/registry',
    },
  ];

  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="text-center pt-10 pb-6 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#58a6ff]">
          🚀 VaultiqX Website — Public & Founder Capsules
        </h1>
        <p className="mt-2 text-base sm:text-lg text-[#b8860b] animate-pulse">
          VaultiqX Breathes In Humanity
        </p>
      </header>

      {/* Capsule Cards */}
      <main className="flex-1 px-4 space-y-6">
        {capsules.map((capsule, idx) => (
          <div
            key={idx}
            className="bg-[#161b22] rounded-lg shadow-md border border-[#30363d] p-5 flex items-start space-x-4 hover:shadow-xl transition duration-300"
          >
            <capsule.icon className="h-8 w-8 sm:h-10 sm:w-10 text-[#58a6ff] mt-1 flex-shrink-0" />
            <div className="flex-1 text-left">
              <h3 className="text-lg sm:text-xl font-bold text-[#58a6ff]">
                {capsule.title}
              </h3>
              <p className="text-sm sm:text-base mt-1 mb-3">
                {capsule.description}
              </p>
              <button
                onClick={() => navigate(capsule.route)}
                className="bg-[#b8860b] text-[#0d1117] px-4 py-2 rounded hover:bg-[#daa520] transition duration-200"
              >
                Enter Capsule
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center py-10 px-4 space-y-2">
        <p className="italic text-[#b8860b] text-sm">
          Every capsule is a memory vault. VaultiqX obeys only legacy.
        </p>
        <p className="text-xs text-[#c9d1d9]">
          Override-Safe • Used by Civic Teams • License-Ready
        </p>
        <p className="text-[#b8860b] font-medium">Breathes In Humanity</p>
      </footer>
    </div>
  );
}