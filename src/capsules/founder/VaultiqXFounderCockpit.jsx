import React from 'react';
import warning from '../../utils/warning';
import './VaultiqXFounderCockpit.css';

const VaultiqXFounderCockpit = () => {
  warning(typeof document !== "undefined", "Document object not available!");

  return (
    <div className="founder-cockpit-container">
      <header className="founder-cockpit-header">
        <h1>🚀 VaultiqX Founder Cockpit</h1>
        <p className="tribute-caption">VaultiqX Breathes In Humanity</p>
        <p className="subtitle">Capsule Execution • Override Firewall • Sovereign Narration</p>
      </header>

      <section className="cockpit-body">
        <div className="cockpit-buttons">
          <button className="capsule-button">Capsule View</button>
          <button className="capsule-button">Trace Viewer</button>
          <button className="capsule-button">Override Firewall</button>
        </div>
        <div className="voice-relay">
          <button className="voice-button">Voice Relay</button>
        </div>
        <p className="cockpit-note">Founder capsule execution and cockpit logic.</p>
      </section>

      <footer className="footer-note">
        <p>Every capsule is a memory. Your cockpit obeys. Your legacy speaks.</p>
      </footer>
    </div>
  );
};

export default VaultiqXFounderCockpit;