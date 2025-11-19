import React from 'react';
import './App.css';

export default function Home() {
  return (
    <div className="App">
      {/* 🎙️ Public Capsule Demo Block */}
      <section style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
        <h2>Try VaultiqX Public Mode</h2>
        <p>Simulate access for students, seniors, and children — no login required.</p>
        <button onClick={() => alert("Public Capsule Activated")}>Launch Demo</button>
      </section>

      {/* 📩 Appointment Request Block */}
      <section style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
        <h2>Request a Tribute Call</h2>
        <form>
          <input type="text" placeholder="Your Name" required style={{ display: "block", marginBottom: "10px" }} />
          <input type="email" placeholder="Email Address" required style={{ display: "block", marginBottom: "10px" }} />
          <textarea placeholder="Reason for Request" required style={{ display: "block", marginBottom: "10px" }} />
          <select style={{ display: "block", marginBottom: "10px" }}>
            <option>Urgency Level</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button type="submit">Submit Request</button>
        </form>
      </section>

      {/* 🔗 Cockpit Access Link */}
      <section style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
        <h2>Founder Cockpit</h2>
        <button onClick={() => window.location.href = "/cockpit"}>Enter Cockpit</button>
      </section>

      {/* 💠 Tribute Watermark Overlay */}
      <div style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        opacity: 0.6,
        fontSize: "0.9rem",
        fontStyle: "italic",
        color: "#888"
      }}>
        Sealed Memory with my Mother Challa Sunitha 💖
      </div>
    </div>
  );
}