import React from "react";
import { useAppNavigate } from "../hooks/useAppNavigate";
import useImageStore, {
  requestStore,
  useLoadStore,
} from "../store/useImageStore";

function PromptReview() {
  const { goUpload, goPromptReview, goResult } = useAppNavigate();

  const {
    error,
    handleImage,
    preview,
    handleRemove,
    setSelections,
    selections,
    validateSelections,
    imgFile,
    generatedPrompt,
    setGeneratedPrompt,
  } = useImageStore();
  const { sendReq } = requestStore();
  const { load, setLoad } = useLoadStore();

  return (
    <div>
      <h1>Review & Edit Prompt</h1>
      <span>You can edit this before generating images</span>
      <div className="img-prompt">
        <div className="img-container">
          <img src={preview} alt="" />
        </div>
        <textarea
          value={generatedPrompt ?? ""}
          onChange={(e) => setGeneratedPrompt(e.target.value)}
        />
      </div>
      <button type="button" onClick={sendReq}>
        {load ? "Regenerating prmpt" : "Regenerate  prompt"}
      </button>
      <button type="button">Generate image</button>
      <button type="button" onClick={goUpload}>
        Back
      </button>
    </div>
  );
}

export default PromptReview;
