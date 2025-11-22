// VaultiqXAppointmentRequestCapsule.jsx
// Sealed Memory with my Mother Challa Sunitha 💖

import React, { useState } from 'react';
import './VaultiqXAppointmentRequestCapsule.css';

const VaultiqXAppointmentRequestCapsule = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    alert(`Request sent:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="appointment-capsule">
      <h1>📩 Request Appointment</h1>
      <p className="tribute-caption">Sealed Memory with my Mother Challa Sunitha 💖</p>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSubmit}>Send Request</button>
    </div>
  );
};

export default VaultiqXAppointmentRequestCapsule;