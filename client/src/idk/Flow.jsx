import { useEffect, useState } from "react";
import PromptReview from "../pages/PromptReview.jsx";
import Results from "../pages/Results.jsx";
import UploadPage from "../pages/UploadPage.jsx";
import usePromptStore, { selectedSettings } from "../store/usePromptStore.js";
import DownloadSection from "../components/DownloadSection.jsx";
import GalleryReviewLayout from "../components/Download.jsx";
import useUIStore from "../store/useUIStore.js";
import ProcessingBanner from "../components/ProcessingBanner.jsx";
import Stepper from "../components/Stepper.jsx";

function Flow() {
  const { loading, state } = useUIStore();
  const { step } = usePromptStore();

  return (
    <>
      <Stepper />
      <div className={`status-slot ${loading ? "is-visible" : ""}`}>
        {loading && <ProcessingBanner />}
      </div>
      {step === 1 && <UploadPage />}
      {step === 2 && <PromptReview />}
      {step === 3 && <GalleryReviewLayout />}
      {/* {step === 3 && <Results />} */}
    </>
  );
}

export default Flow;
