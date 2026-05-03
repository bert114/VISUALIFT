import { useEffect, useMemo, useRef, useState } from "react";
import usePromptStore, { selectedSettings } from "../store/usePromptStore.js";
import { buildFinalPrompt } from "../../../backend/src/utils/promptBuilder.js";
import { buildPrompt } from "../helper/util.js";
import {
  purposes,
  models,
  backgrounds,
  colors,
  ratios,
} from "../static/constantfile.js";
import PreferenceBlock from "./preference/PreferenceBlock.jsx";
import OptionCard from "./preference/OptionCard.jsx";
import ImagePrefPurpose from "./preference/ImagePrefPurpose.jsx";
import StyleModel from "./preference/StyleModel.jsx";
import Background from "./preference/Background.jsx";
import Color from "./preference/Color.jsx";

function GenerationPreferences() {
  const { handleGenerate, isUploaded } = usePromptStore();
  const { prompt } = usePromptStore();
  const {
    imagePurpose,
    model,
    background,
    color,
    aspectRatio,
    numberOfImages,
    setImagePurpose,
    setModel,
    setBackground,
    setColor,
    setAspectRatio,
    setNumberOfImages,
  } = selectedSettings();

  const userPreference = useMemo(
    () => ({
      imagePurpose,
      model,
      background,
      color,
      aspectRatio,
      numberOfImages,
    }),
    [imagePurpose, model, background, color, aspectRatio, numberOfImages],
  );

  useEffect(() => {
    return;
    console.log(userPreference);
    if (!prompt) return;

    buildPrompt(prompt, userPreference);
  }, [prompt, userPreference]);

  return (
    <section className="generation-preferences">
      <header className="generation-preferences__header">
        <h2>Generation Preferences</h2>
        <p>Configure how the AI should generate your image.</p>
      </header>

      <div className="generation-preferences__body">
        <ImagePrefPurpose />
        <StyleModel />
        <Background />
        <Color />

        <button
          className="primary-btn"
          onClick={handleGenerate}
          data-testid="generate-btn"
          disabled={!isUploaded}
        >
          Generate
        </button>
      </div>
    </section>
  );
}

export default GenerationPreferences;
