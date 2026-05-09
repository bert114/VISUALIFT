import { useState } from "react";
import PromptReview from "../pages/PromptReview.jsx";
import Results from "../pages/Results.jsx";
import UploadPage from "../pages/UploadPage.jsx";
import usePromptStore from "../store/usePromptStore.js";
import DownloadSection from "../components/DownloadSection.jsx";
import GalleryReviewLayout from "../components/Download.jsx";

function Flow() {
  const { step } = usePromptStore();

  return (
    <>
      {step === 1 && <UploadPage />}
      {step === 2 && <PromptReview />}
      {step === 1 && <DownloadSection />}
      {step === 3 && <GalleryReviewLayout />}
      {/* {step === 3 && <Results />} */}
    </>
  );
}

export default Flow;
