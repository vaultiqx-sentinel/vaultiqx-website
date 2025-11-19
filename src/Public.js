import React from 'react';
import './App.css';

function PublicAccess() {
  return (
    <div className="App">
      {/* 🎓 Student Access Block */}
      <section>
        <h2>Student Capsule</h2>
        <p>Access learning tools, tribute games, and emergency help — no login required.</p>
        <button onClick={() => alert("Student Mode Activated")}>Enter Student Mode</button>
      </section>

      {/* 👵 Senior Citizen Access Block */}
      <section>
        <h2>Senior Capsule</h2>
        <p>Play memory games, request help, and explore tribute stories.</p>
        <button onClick={() => alert("Senior Mode Activated")}>Enter Senior Mode</button>
      </section>

      {/* 🧒 Child Access Block */}
      <section>
        <h2>Child Capsule</h2>
        <p>Explore safe games, emergency triggers, and tribute animations.</p>
        <button onClick={() => alert("Child Mode Activated")}>Enter Child Mode</button>
      </section>

      {/* 💠 Tribute Watermark Overlay */}
      <div className="watermark">
        Sealed Memory with my Mother Challa Sunitha 💖
      </div>
    </div>
  );
}

export default PublicAccess;