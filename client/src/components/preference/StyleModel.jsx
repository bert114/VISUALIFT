import React, { useState } from "react";
import PreferenceBlock from "./PreferenceBlock.jsx";
import { models } from "../../static/constantfile.js";
import { usePreferenceActions } from "../../hooks/usePreferenceAction.jsx";
import { selectedSettings } from "../../store/usePromptStore.js";

function StyleModel() {
  const action = usePreferenceActions();
  const [selectedModel, setSelectedModel] = useState("Realistic");
  const { setUserPref } = selectedSettings();

  return (
    <PreferenceBlock title="Style / Model">
      <div className="model-card-grid">
        {models.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => {
              setUserPref("model", item.title);
              setSelectedModel(item.title);
            }}
            className={`model-card ${
              selectedModel === item.title ? "model-card--active" : ""
            }`}
          >
            <span className="model-card__icon">{item.icon}</span>

            <span className="model-card__content">
              <span className="model-card__title">
                {selectedModel === item.title && "✓ "}
                {item.title}
              </span>

              <span className="model-card__desc">{item.desc}</span>
            </span>

            {item.recommended && (
              <span className="model-card__tag">Recommended</span>
            )}
          </button>
        ))}
      </div>
    </PreferenceBlock>
  );
}

export default StyleModel;
