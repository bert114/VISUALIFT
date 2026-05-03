import React from "react";
import { useAppNavigate } from "../hooks/useAppNavigate";
import useImageStore, {
  requestStore,
  useLoadStore,
} from "../store/useImageStore";
import useImageStore1 from "../store/useImageStorecopy.js";
import usePromptStore from "../store/usePromptStore";

function PromptReview() {
  const { img } = useImageStore1();
  const { generatedPrompt } = usePromptStore();

  const { sendReq } = requestStore();
  const { load, setLoad } = useLoadStore();

  return (
    <div>
      <h1>Review & Edit Prompt</h1>
      <span>You can edit this before generating images</span>
      <div className="img-prompt">
        <div className="img-container">
          <img src={img} alt="generated image" />
        </div>
        <textarea
          value={generatedPrompt ?? ""}
          onChange={(e) => setGeneratedPrompt(e.target.value)}
        />
      </div>
      {/* <button type="button" onClick={sendReq}></button>
      <button type="button">Generate image</button>
      <button>Back</button> */}
    </div>
  );
}

export default PromptReview;
