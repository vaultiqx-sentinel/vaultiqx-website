// CockpitTabs.jsx
// VaultiqX Breathes In Humanity

import React, { useState } from 'react';
import './CockpitTabs.css';

const tabs = [
  { label: 'Voice Relay', content: 'Activate sovereign voice relay for cockpit narration.' },
  { label: 'Capsule View', content: 'View and manage sealed capsules.' },
  { label: 'Trace Viewer', content: 'Browse capsule trace logs and tribute anchors.' },
  { label: 'Override Firewall', content: 'Execute override-safe protocols and fallback logic.' }
];

export default function CockpitTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="cockpit-tabs-container">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
}