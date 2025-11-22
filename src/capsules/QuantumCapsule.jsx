// src/capsules/QuantumCapsule.jsx
import React, { useState } from 'react';
import { logEvent } from '../services/auditService.js';

export default function QuantumCapsule() {
  const [task, setTask] = useState('');
  const [result, setResult] = useState(null);

  function runQuantumTask() {
    // Simulated quantum integration (placeholder)
    const output = `Quantum optimization executed for: ${task}`;
    setResult(output);
    logEvent({ type: 'QUANTUM_TASK', task, output });
  }

  return (
    <div className="capsule">
      <h1>Quantum Capsule</h1>
      <p>10–15% quantum integration for optimization, encryption, and simulations.</p>

      <input
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter task (e.g., logistics, encryption)"
      />
      <button className="button" onClick={runQuantumTask}>Run Quantum Task</button>

      {result && (
        <div className="notice">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
}