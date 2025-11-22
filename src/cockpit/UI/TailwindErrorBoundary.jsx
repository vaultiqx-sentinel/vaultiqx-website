import React, { useEffect, useState } from 'react';

const TailwindErrorBoundary = ({ children, testClass = "bg-[#0d1117]" }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Create a test element to verify Tailwind class is applied
    const el = document.createElement("div");
    el.className = testClass;
    document.body.appendChild(el);

    const style = window.getComputedStyle(el);
    const bgColor = style.backgroundColor;

    // If Tailwind didn't apply the class, mark error
    if (!bgColor || bgColor === "rgba(0, 0, 0, 0)") {
      setHasError(true);
    }

    document.body.removeChild(el);
  }, [testClass]);

  if (hasError) {
    return (
      <div style={{ padding: "40px", textAlign: "center", backgroundColor: "#fff3f3" }}>
        <h2 style={{ color: "#cc0000" }}>⚠️ Tailwind Error</h2>
        <p style={{ color: "#333" }}>
          Tailwind utility <strong>{testClass}</strong> did not apply correctly.
        </p>
        <p style={{ fontSize: "12px", color: "#666", marginTop: "10px" }}>
          Check if Tailwind is loaded, version ≥ 3, and `index.css` is imported.
        </p>
      </div>
    );
  }

  return children;
};

export default TailwindErrorBoundary;