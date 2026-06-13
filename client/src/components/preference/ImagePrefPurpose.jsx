import React from "react";
import PreferenceBlock from "./PreferenceBlock.jsx";
import { purposes } from "../../static/constantfile.js";
import usePromptStore, {
  selectedSettings,
} from "../../store/usePromptStore.js";
import { useState } from "react";

function ImagePrefPurpose() {
  const { setUserPref } = selectedSettings();
  const [selectedPurpose, setSelectedPurpose] = useState(purposes[0]);

  const handlePurposeSelect = (purpose) => {
    setSelectedPurpose(purpose);
    setUserPref("imagePurpose", purpose);
  };

  return (
    <PreferenceBlock title="Image Purpose">
      <div className="chip-list">
        {purposes.map((item) => {
          const isActive = selectedPurpose === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => handlePurposeSelect(item)}
              className={`chip ${isActive ? "chip--active" : ""}`}
              aria-pressed={isActive}
            >
              {item}
            </button>
          );
        })}
      </div>
    </PreferenceBlock>
  );
}

export default ImagePrefPurpose;
