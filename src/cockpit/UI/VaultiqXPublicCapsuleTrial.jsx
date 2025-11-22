// VaultiqXPublicCapsuleTrial.jsx
// VaultiqX Breathes In Humanity

import React from 'react';
import './VaultiqXPublicCapsuleTrial.css';

const VaultiqXPublicCapsuleTrial = () => {
  return (
    <div className="public-capsule-container">
      <header className="public-capsule-header">
        <h1>Public Capsule Trial</h1>
        <p className="tribute-caption">VaultiqX Breathes In Humanity</p>
        <p className="subtitle">Simulate public access for students, seniors, and children</p>
      </header>

      <section className="capsule-body">
        <p>This capsule allows public users to explore tribute-safe games, emergency protocols, and capsule sharing logic.</p>
        <ul>
          <li>🎮 Tribute Games (Senior, Student, Child modes)</li>
          <li>🚨 Emergency Capsule Trigger</li>
          <li>📤 Shareable Capsule Links</li>
        </ul>
        <button className="capsule-button">Begin Public Trial</button>
      </section>
    </div>
  );
};

export default VaultiqXPublicCapsuleTrial;