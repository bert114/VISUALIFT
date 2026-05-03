import React from "react";
import PreferenceBlock from "./PreferenceBlock.jsx";
import { colors } from "../../static/constantfile.js";
import { selectedSettings } from "../../store/usePromptStore.js";

function Color() {
  const {
    setImagePurpose,
    setModel,
    setBackground,
    setColor,
    setAspectRatio,
    setNumberOfImages,
  } = selectedSettings();

  return (
    <PreferenceBlock title="Color Preference">
      <div className="color-row">
        <input type="color" defaultValue="#00E5FF" />
        <input type="text" defaultValue="#00E5FF" />
      </div>

      <div className="chip-list chip-list--small">
        {colors.map((item) => (
          <button
            onClick={() => setColor(item)}
            key={item}
            type="button"
            className="chip chip--small"
          >
            {item}
          </button>
        ))}
      </div>
    </PreferenceBlock>
  );
}

export default Color;
