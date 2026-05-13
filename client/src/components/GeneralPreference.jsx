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
import ImageCount from "./preference/ImageCount.jsx";
import useImageStore from "../store/useImageStorecopy.js";
import useUIStore from "../store/useUIStore.js";
import AspectRatio from "./preference/AspectRatio.jsx";
import SelectedSummary from "./preference/SelectedSummary.jsx";

function GenerationPreferences() {
  const [optionalOpen, setOptionalOpen] = useState(false);

  const { handleGenerate } = usePromptStore();
  const { img } = useImageStore();
  const { loading } = useUIStore();

  const {
    imagePurpose,
    model,
    background,
    color,
    aspectRatio,
    numberOfImages,
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

  return (
    <section
      className={`generation-preferences ${loading && img ? "is-processing" : ""}`}
    >
      <header className="generation-preferences__header">
        <h2>Generation Preferences</h2>
        <p>
          {loading && img
            ? "Applying your selected preferences."
            : "Configure how the AI should generate your image."}
        </p>
      </header>

      <div className="generation-preferences__body">
        <div className="generation-preferences__group">
          <StyleModel />
          <AspectRatio />
        </div>

        <div className="generation-preferences__group">
          <button
            type="button"
            className="generation-preferences__section-toggle"
            onClick={() => setOptionalOpen((current) => !current)}
            aria-expanded={optionalOpen}
            aria-controls="optional-generation-settings"
          >
            <span>
              <strong>Advance settings</strong>
              <small>Purpose, background, and color controls</small>
            </span>

            <span
              className="generation-preferences__section-chevron"
              aria-hidden="true"
            >
              ▾
            </span>
          </button>

          {optionalOpen && (
            <div
              id="optional-generation-settings"
              className="generation-preferences__optional"
            >
              <ImagePrefPurpose />
              <Background />
              <Color />
            </div>
          )}
        </div>

        <SelectedSummary />

        <button
          className="btn btn-primary"
          onClick={handleGenerate}
          data-testid="generate-btn"
          disabled={!img || loading}
        >
          {loading && img ? "Analyzing..." : "Analyze image"}
        </button>
      </div>
    </section>
  );
}

export default GenerationPreferences;
