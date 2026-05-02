import { useState } from "react";
import PromptReview from "../pages/PromptReview.jsx";
import Results from "../pages/Results.jsx";
import UploadPage from "../pages/UploadPage.jsx";

function Flow() {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && <UploadPage />}
      {step === 1 && <PromptReview />}
      {/* {step === 2 && <Review />}
      {step === 3 && <Results />} */}
    </>
  );
}

export default Flow;
