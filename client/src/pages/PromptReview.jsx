import React from "react";
import { useAppNavigate } from "../hooks/useAppNavigate";
import useImageStore, {
  requestStore,
  useLoadStore,
} from "../store/useImageStore";
import useImageStore1 from "../store/useImageStorecopy.js";
import usePromptStore, { selectedSettings } from "../store/usePromptStore";
import { useGenerateStore } from "../store/useGenerateStore.js";

function PromptReview() {
  const { img } = useImageStore1();
  const { generatedPrompt, setGeneratedPrompt } = usePromptStore();
  const { userPref } = selectedSettings();

  const { sendReq } = requestStore();
  const { load, setLoad } = useLoadStore();
  const { generate } = useGenerateStore();

  return (
    <section className="prompt-review">
      <div className="review-shell">
        <a className="back-link" href="#">
          ← Back to Upload
        </a>

        <header className="review-header">
          <h1>Review Your Prompt</h1>
          <p>Edit your prompt before generating images.</p>
        </header>

        <div className="review-grid">
          <article className="review-card">
            <h2>Reference Image</h2>

            <div className="image-preview">
              {img ? (
                <img src={img} alt="Reference preview" />
              ) : (
                "[ IMAGE PREVIEW ]"
              )}
            </div>
          </article>

          <article className="review-card prompt-card">
            <h2>Prompt</h2>

            <textarea
              className="prompt-input"
              placeholder="Describe the image style, lighting, composition, details..."
              value={generatedPrompt || ""}
              onChange={(e) => setGeneratedPrompt(e.target.value)}
            />

            {!generatedPrompt && (
              <div className="error-box">
                <strong>⚠ Your prompt is empty or incomplete.</strong>
                <span>Add more detail to continue.</span>
              </div>
            )}
          </article>
        </div>

        <div className="actions">
          <button className="btn btn-secondary">Back to Upload</button>
          <button className="btn btn-secondary">Regenerate Prompt</button>
          <button
            className="btn btn-primary"
            onClick={() => generate(userPref)}
          >
            Generate Images
          </button>
        </div>
      </div>
    </section>
  );
}

export default PromptReview;
