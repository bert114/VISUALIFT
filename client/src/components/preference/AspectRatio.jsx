import React from "react";
import PreferenceBlock from "./PreferenceBlock.jsx";
import { ratios } from "../../static/constantfile.js";
import { useState } from "react";
import { selectedSettings } from "../../store/usePromptStore.js";

function AspectRatio() {
  const [selectedRatio, setSelectedRatio] = useState(ratios[0]?.label);
  const { setUserPref } = selectedSettings();

  const handleAspectRatio = (ratio) => {
    setSelectedRatio(ratio);
    setUserPref("aspectRatio", ratio);
  };

  return (
    <PreferenceBlock title="Aspect Ratio">
      <div className="ratio-list">
        {ratios.map((item) => {
          const isActive = selectedRatio === item.label;

          return (
            <button
              onClick={() => handleAspectRatio(item.label)}
              key={item.label}
              type="button"
              className={`ratio-button ${
                isActive ? "ratio-button--active" : ""
              }`}
              aria-pressed={isActive}
            >
              <span>{item.label}</span>
              <i className={`ratio-shape ratio-shape--${item.shape}`} />
            </button>
          );
        })}
      </div>
    </PreferenceBlock>
  );
}

export default AspectRatio;
