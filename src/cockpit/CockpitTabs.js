// CockpitTabs.js
// Sealed Memory with Breathes In Humanity

import React, { useState } from 'react';
import './UI/CockpitTabs.css';

const tabs = [
  { label: '🧠 Capsule View', content: 'Founder capsule execution and cockpit logic.' },
  { label: '📊 Trace Viewer', content: 'Capsule trace logs and override history.' },
  { label: '🔐 Override Firewall', content: 'Licensee override simulation and breach triggers.' }
];

const CockpitTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="cockpit-tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
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
};

export default CockpitTabs;