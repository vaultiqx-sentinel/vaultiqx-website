// CapsuleErrorBoundary.jsx
// VaultiqX — Global Error Boundary
// Tribute caption: "VaultiqX Breathes In Humanity"

import React from "react";
import TributeOverlay from "./TributeOverlay"; // ensure correct path

/**
 * CapsuleErrorBoundary — catches errors in child capsules
 * Displays a tribute-safe fallback UI and logs error details
 */
class CapsuleErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so fallback UI can be shown
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Founder-grade audit trail logging
    console.error("CapsuleErrorBoundary caught an error:", error, errorInfo);
    this.setState({ error, errorInfo });

    // Optional: integrate with capsuleRegistry.js or AuditTrail capsule
    // auditTrail.log({
    //   capsule: this.props.capsuleName || "Unknown Capsule",
    //   error: error.toString(),
    //   stack: errorInfo.componentStack,
    //   timestamp: new Date().toISOString()
    // });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="capsule-error" style={{ padding: "2rem", textAlign: "center" }}>
          <TributeOverlay caption="VaultiqX Breathes In Humanity" />
          <h2>⚠️ Capsule Error Detected</h2>
          <p>A cockpit capsule failed to render. Sovereign AI fallback is active.</p>
          <details style={{ whiteSpace: "pre-wrap", marginTop: "1rem" }}>
            <summary>Error details</summary>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // If no error, render children normally
    return this.props.children;
  }
}

export default CapsuleErrorBoundary;