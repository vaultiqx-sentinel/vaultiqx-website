import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/founder-cockpit">🚀 Founder Cockpit</Link></li>
        <li><Link to="/licensee-upgrade">🔐 License Upgrade</Link></li>
        <li><Link to="/cerese-upgrade">🌌 Cerese Upgrade</Link></li>
        <li><Link to="/sovereign-relay">🕊 Sovereign Relay</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;