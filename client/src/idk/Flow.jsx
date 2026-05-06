import { useState } from "react";
import PromptReview from "../pages/PromptReview.jsx";
import Results from "../pages/Results.jsx";
import UploadPage from "../pages/UploadPage.jsx";
import usePromptStore from "../store/usePromptStore.js";
import DownloadSection from "../components/DownloadSection.jsx";

function Flow() {
  const { step } = usePromptStore();

  return (
    <>
      {step === 1 && <UploadPage />}
      {step === 2 && <PromptReview />}
      {step === 3 && <DownloadSection />}
      {/* {step === 3 && <Results />} */}
    </>
  );
}

export default Flow;
