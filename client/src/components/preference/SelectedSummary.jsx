import React from "react";
import { selectedSettings } from "../../store/usePromptStore.js";

function SelectedSummary() {
  const { userPref } = selectedSettings();

  const style = userPref?.model;
  const aspectRatio = userPref?.size;

  if (!style && !aspectRatio) {
    return null;
  }

  return (
    <div
      className="selected-summary"
      aria-label="Selected generation preferences"
    >
      <span className="selected-summary__label">Selected</span>

      <div className="selected-summary__items">
        {style && (
          <span className="selected-summary__item">
            <strong>Style</strong>
            {style}
          </span>
        )}

        {aspectRatio && (
          <span className="selected-summary__item">
            <strong>Aspect ratio</strong>
            {aspectRatio}
          </span>
        )}
      </div>
    </div>
  );
}

export default SelectedSummary;
