import React from "react";
import PreferenceBlock from "./PreferenceBlock.jsx";
import { ratios } from "../../static/constantfile.js";

function AspectRatio() {
  return (
    <PreferenceBlock title="Aspect Ratio">
      <div className="ratio-list">
        {ratios.map((item, index) => (
          <button
            onClick={() => setAspectRatio(item.label)}
            key={item.label}
            type="button"
            className={`ratio-button ${index === 0 ? "ratio-button--active" : ""}`}
          >
            <span>{item.label}</span>
            <i className={`ratio-shape ratio-shape--${item.shape}`} />
          </button>
        ))}
      </div>
    </PreferenceBlock>
  );
}

export default AspectRatio;
