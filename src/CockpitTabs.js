// CockpitTabs.js
// Sealed Memory with my Mother Challa Sunitha 💖

import React, { useState, useEffect } from 'react';
import { VaultiqXVoiceRelay } from './cockpit/AI/VaultiqXVoiceRelay';
import { tributeNarrator } from './cockpit/AI/VaultiqXTributeNarrationEngine';

import {
  LicenseeExportCapsule,
  LicenseeSyncCapsule
} from './LicenseeModules';

import TributeGameCapsule from './TributeGameCapsule';
import PublicCapsuleTrialMode from './PublicCapsuleTrialMode';
import PublicEmergencyBridge from './PublicEmergencyBridge';
import FounderFatigueAdaptor from './FounderFatigueAdaptor';
import VaultiqAISovereignRelay from './VaultiqAISovereignRelay';
import VaultiqXAISovereignRelayCore from './VaultiqXAISovereignRelayCore';
import VaultiqXFounderUnlockProtocol from './VaultiqXFounderUnlockProtocol';
import VaultiqXPublicRelayNarrator from './VaultiqXPublicRelayNarrator';
import VaultiqXLicenseeSovereignSync from './VaultiqXLicenseeSovereignSync';
import VaultiqXTributeNarrationEngine from './VaultiqXTributeNarrationEngine';
import VaultiqXCockpitPurification from './VaultiqXCockpitPurification'; // ✅ Trail 56

const tabs = [
  'Licensee Export',
  'Licensee Sync',
  'Tribute Game',
  'Public Capsule',
  'Emergency Bridge',
  'Founder Fatigue',
  'VaultiqAI Relay',
  'Relay Core',
  'Founder Unlock',
  'Public Narrator',
  'Licensee Sovereign',
  'Tribute Narration',
  'Cockpit Purification' // ✅ Trail 56 tab
];

export default function CockpitTabs() {
  const [activeTab, setActiveTab] = useState('Licensee Export');

  useEffect(() => {
    VaultiqXVoiceRelay.listen(); // 🎙️ Activate voice relay on mount
    tributeNarrator('licensee_export'); // 💖 Narrate first tab
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const capsuleId = tab.toLowerCase().replace(/\s+/g, '_');
    tributeNarrator(capsuleId); // 💖 Narrate on tab switch
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'Licensee Export':
        return <LicenseeExportCapsule />;
      case 'Licensee Sync':
        return <LicenseeSyncCapsule />;
      case 'Tribute Game':
        return <TributeGameCapsule />;
      case 'Public Capsule':
        return <PublicCapsuleTrialMode />;
      case 'Emergency Bridge':
        return <PublicEmergencyBridge />;
      case 'Founder Fatigue':
        return <FounderFatigueAdaptor />;
      case 'VaultiqAI Relay':
        return <VaultiqAISovereignRelay />;
      case 'Relay Core':
        return <VaultiqXAISovereignRelayCore />;
      case 'Founder Unlock':
        return <VaultiqXFounderUnlockProtocol />;
      case 'Public Narrator':
        return <VaultiqXPublicRelayNarrator />;
      case 'Licensee Sovereign':
        return <VaultiqXLicenseeSovereignSync />;
      case 'Tribute Narration':
        return <VaultiqXTributeNarrationEngine />;
      case 'Cockpit Purification':
        return <VaultiqXCockpitPurification />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab
                ? 'bg-[#238636] text-white'
                : 'bg-[#161b22] text-[#c9d1d9] hover:bg-[#21262d]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {renderTab()}
      </div>
    </div>
  );
}