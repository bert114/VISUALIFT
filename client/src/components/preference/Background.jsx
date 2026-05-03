import React from "react";
import PreferenceBlock from "./PreferenceBlock.jsx";
import { backgrounds } from "../../static/constantfile.js";
import OptionCard from "./OptionCard.jsx";
import { selectedSettings } from "../../store/usePromptStore.js";

function Background() {
  const {
    setImagePurpose,
    setModel,
    setBackground,
    setColor,
    setAspectRatio,
    setNumberOfImages,
  } = selectedSettings();

  return (
    <PreferenceBlock title="Background">
      <div
        className="card-grid card-grid--three"
        onClick={(e) => setBackground(e.target.innerText)}
      >
        {backgrounds.map((item, index) => (
          <OptionCard
            key={item.title}
            title={item.title}
            desc={item.desc}
            active={index === 0}
          />
        ))}
      </div>
    </PreferenceBlock>
  );
}

export default Background;
