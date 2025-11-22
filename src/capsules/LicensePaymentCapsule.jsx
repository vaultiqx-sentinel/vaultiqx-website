// src/capsules/LicensePaymentCapsule.jsx
import React, { useState } from 'react';
import { processPayment } from '../services/paymentService.js';
import { markPaymentReceived } from '../services/licenseService.js';
import { logEvent } from '../services/auditService.js';

export default function LicensePaymentCapsule() {
  const [tier, setTier] = useState('Government');
  const [period, setPeriod] = useState('Annual');
  const [amount, setAmount] = useState(1000000); // placeholder huge amount
  const [licenseeId, setLicenseeId] = useState('gov-ap-demo');
  const [result, setResult] = useState(null);

  async function onPay(e) {
    e.preventDefault();
    const res = await processPayment({ licenseeId, tier, period, amount });
    setResult(res);

    logEvent({ type: 'PAYMENT_ATTEMPT', licenseeId, tier, period, amount, res });
    const receipt = markPaymentReceived({
      licenseeId, tier, period, paymentRef: res.paymentRef, routeStatus: res.status
    });
    logEvent({ type: 'PAYMENT_RECEIVED_LOGGED', licenseeId, receipt });
  }

  return (
    <div className="capsule">
      <h1>License Payment</h1>
      <p>VaultiqX Breathes In Humanity</p>

      <form onSubmit={onPay}>
        <label>Licensee ID</label>
        <input value={licenseeId} onChange={e => setLicenseeId(e.target.value)} />

        <label>Tier</label>
        <select value={tier} onChange={e => setTier(e.target.value)}>
          <option>Government</option>
          <option>Enterprise</option>
        </select>

        <label>Period</label>
        <select value={period} onChange={e => setPeriod(e.target.value)}>
          <option>Monthly</option>
          <option>Annual</option>
        </select>

        <label>Amount</label>
        <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />

        <button className="button" type="submit">Proceed to Payment</button>
      </form>

      <hr />
      {result && (
        <div className="notice">
          <strong>Payment status:</strong> {result.status}<br />
          <strong>Ref:</strong> {result.paymentRef}<br />
          <strong>Routed to:</strong> {result.routedTo || 'N/A'}
        </div>
      )}

      <p style={{ marginTop: 12 }}>
        Payments auto-trigger license activation checks and sealed upgrades. No founder interference required.
      </p>
    </div>
  );
}