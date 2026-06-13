import React from "react";
import PreferenceBlock from "./PreferenceBlock.jsx";
import { backgrounds } from "../../static/constantfile.js";
import OptionCard from "./OptionCard.jsx";
import { selectedSettings } from "../../store/usePromptStore.js";
import { useState } from "react";

function Background() {
  const { setUserPref } = selectedSettings();
  const [selectedBackground, setSelectedBackground] = useState(
    backgrounds[0]?.title,
  );

  const handleBackgroundSelect = (background) => {
    setSelectedBackground(background);
    setUserPref("background", background);
  };

  return (
    <PreferenceBlock title="Background">
      <div className="card-grid card-grid--three">
        {backgrounds.map((item) => {
          const isActive = selectedBackground === item.title;

          return (
            <OptionCard
              key={item.title}
              title={item.title}
              desc={item.desc}
              active={isActive}
              onClick={() => handleBackgroundSelect(item.title)}
            />
          );
        })}
      </div>
    </PreferenceBlock>
  );
}

export default Background;
