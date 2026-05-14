import React from "react";
import { useAppNavigate } from "../hooks/useAppNavigate";
import { requestStore, useLoadStore } from "../store/useImageStore";
import useImageStore from "../store/useImageStorecopy.js";
import usePromptStore, { selectedSettings } from "../store/usePromptStore";
import { ChevronLeft, ChevronRight, Download, PencilIcon } from "lucide-react";

import useGenerateStore from "../store/useGenerateStore.js";
import useUIStore from "../store/useUIStore.js";

function PromptReview() {
  const { img } = useImageStore();
  const { generatedPrompt, setGeneratedPrompt, setStep, handleGenerate } =
    usePromptStore();
  const { userPref } = selectedSettings();

  const { sendReq } = requestStore();
  const { load, setLoad } = useLoadStore();
  const { generate } = useGenerateStore();
  const { loading } = useUIStore();

  return (
    <section className="prompt-review">
      <header className="review-page-header">
        <h1>Review your prompt</h1>
        <p>Make any changes before creating images.</p>
      </header>

      <div className="review-shell">
        <div className="review-grid">
          <article className="review-card image-card">
            <div className="card-heading">
              <h2>Reference Image</h2>
              <p>Used to create the prompt.</p>
            </div>

            <div className="image-preview">
              {img ? (
                <img src={img} alt="Reference preview" />
              ) : (
                <div className="empty-preview">
                  <strong>Reference uploaded</strong>
                  <span>Used for prompt generation</span>
                </div>
              )}
            </div>

            <div className="card-actions">
              <button
                onClick={() => setStep(1)}
                className="btn btn-secondary"
                disabled={loading}
              >
                Change Reference
              </button>
            </div>
          </article>

          <article className="review-card prompt-card">
            <div className="card-heading prompt-heading">
              <div>
                <h2>
                  Prompt{" "}
                  <span aria-hidden="true">
                    <PencilIcon size={20} />
                  </span>
                </h2>
                <p>Review and edit the prompt before generating.</p>
              </div>

              <span className="edit-badge">Editable prompt</span>
            </div>

            <textarea
              className="prompt-input"
              value={generatedPrompt || ""}
              onChange={(e) => setGeneratedPrompt(e.target.value)}
            />

            <p className="prompt-helper">
              Tip: Check the subject, style, background, and color details
              before generating.
            </p>

            {!generatedPrompt && (
              <div className="error-box">
                <strong>⚠ Your prompt is empty or incomplete.</strong>
                <span>Add more detail to continue.</span>
              </div>
            )}

            <div className="card-actions prompt-actions">
              <div className="refine-group">
                <button
                  onClick={handleGenerate}
                  className="btn btn-secondary"
                  disabled={loading}
                >
                  Refine Prompt
                </button>
                <p>Uses your current prompt and preferences.</p>
              </div>

              <button
                className="btn btn-primary"
                onClick={() => generate(userPref)}
                disabled={loading}
              >
                {loading ? "Creating images..." : "Create 3 Images"}
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default PromptReview;
//fuheuhfuhefuhe
