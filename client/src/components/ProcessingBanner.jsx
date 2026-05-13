import React from "react";
import BANNER_CONTENT from "../static/bannerContent.js";

function ProcessingBanner({ state = "processing" }) {
  const banner = BANNER_CONTENT[state] || BANNER_CONTENT.analyzing;

  return (
    <div
      className={`processing-banner processing-banner--${state}`}
      role="status"
      aria-live="polite"
    >
      <div className="processing-content">
        <div className="processing-main">
          <div className="processing-icon" aria-hidden="true">
            {banner.icon}
          </div>

          <div>
            <h3>{banner.title}</h3>
            <p>{banner.message}</p>
          </div>
        </div>

        {banner.showProgress && (
          <div className="processing-status">
            {banner.statuses.map((statusText) => (
              <span key={statusText}>{statusText}</span>
            ))}
          </div>
        )}
      </div>

      {banner.showProgress && (
        <div className="processing-progress" aria-hidden="true">
          <span />
        </div>
      )}
    </div>
  );
}

export default ProcessingBanner;
