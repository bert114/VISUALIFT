import React from "react";

function ProcessingBanner({ status = "processing" }) {
  const isReady = status === "ready";

  return (
    <div
      className={`processing-banner ${
        isReady ? "processing-banner-ready" : ""
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="processing-content">
        <div className="processing-main">
          <div className="processing-icon" aria-hidden="true">
            {isReady ? "✓" : "✦"}
          </div>

          <div>
            <h3>{isReady ? "Prompt ready" : "Creating your prompt"}</h3>
            <p>
              {isReady
                ? "Your editable prompt has been created."
                : "Analyzing your reference image and applying your preferences."}
            </p>
          </div>
        </div>

        {!isReady && (
          <div className="processing-status">
            <span>Reading image details…</span>
            <span>Detecting subject and background…</span>
            <span>Preparing editable prompt…</span>
          </div>
        )}
      </div>

      {!isReady && (
        <div className="processing-progress" aria-hidden="true">
          <span />
        </div>
      )}
    </div>
  );
}

export default ProcessingBanner;
