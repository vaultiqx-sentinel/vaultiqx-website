// CapsuleErrorBoundary.jsx
// VaultiqX — Global Error Boundary
// Tribute caption: "VaultiqX Breathes In Humanity"

import React from "react";

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
    // Log error details for debugging
    console.error("CapsuleErrorBoundary caught an error:", error, errorInfo);
    this.setState({ error, errorInfo });
    // TODO: integrate with capsuleRegistry.js or audit trail
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="capsule-error">
          <h2>⚠️ Capsule Error Detected</h2>
          <p>
            Tribute caption: <strong>VaultiqX Breathes In Humanity</strong>
          </p>
          <p>
            A cockpit capsule failed to render. Sovereign AI fallback is active.
          </p>
          <details style={{ whiteSpace: "pre-wrap" }}>
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