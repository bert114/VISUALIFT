import React, { useState } from "react";
import PreferenceBlock from "./PreferenceBlock.jsx";
import { models } from "../../static/constantfile.js";
import { usePreferenceActions } from "../../hooks/usePreferenceAction.jsx";
import { selectedSettings } from "../../store/usePromptStore.js";
import { getNumber } from "../../helper/helper.js";
import useImageStore from "../../store/useImageStorecopy.js";

function StyleModel() {
  const action = usePreferenceActions();
  const [selectedModel, setSelectedModel] = useState("img4");
  const { setUserPref } = selectedSettings();
  const { loading } = useImageStore();

  const handleImageCount = (model) => {
    setUserPref("model", model);
    setSelectedModel(model);
  };

  return (
    <PreferenceBlock title="Image style">
      <div className="model-card-grid">
        {models.map((item) => {
          const isActive = selectedModel === item.model;

          return (
            <button
              key={item.model}
              type="button"
              onClick={() => handleImageCount(item.model)}
              className={`model-card ${isActive ? "model-card--active" : ""}`}
              aria-pressed={isActive}
            >
              <span className="model-card__icon">{item.icon}</span>

              <span className="model-card__content">
                <span className="model-card__title">{item.title}</span>

                <span className="model-card__desc">{item.desc}</span>
              </span>

              {item.recommended && (
                <span className="model-card__tag">Recommended</span>
              )}
            </button>
          );
        })}
      </div>
    </PreferenceBlock>
  );
}

export default StyleModel;
