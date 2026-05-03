import React from "react";
import PreferenceBlock from "./PreferenceBlock.jsx";
import { purposes } from "../../static/constantfile.js";
import usePromptStore, {
  selectedSettings,
} from "../../store/usePromptStore.js";

function ImagePrefPurpose() {
  const { setUserPref } = selectedSettings();

  return (
    <PreferenceBlock title="Image Purpose">
      <div
        className="chip-list"
        onClick={(e) => setUserPref("imagePurpose", e.target.innerText)}
      >
        {purposes.map((item, index) => (
          <button
            key={item}
            type="button"
            className={`chip ${index === 0 ? "chip--active" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>
    </PreferenceBlock>
  );
}

export default ImagePrefPurpose;
