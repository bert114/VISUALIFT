import React from "react";

import checkIcon from "../assets/icons/check.png";
import pinIcon from "../assets/icons/pin.png";
import gridIcon from "../assets/icons/grid.png";
import usePromptStore from "../store/usePromptStore.js";

function Stepper() {
  const { step } = usePromptStore();
  const getStepClassName = (stepNumber) => {
    if (step > stepNumber) return "step done";
    if (step === stepNumber) return "step active";
    return "step";
  };

  return (
    <nav className="stepper stepper-clean" aria-label="Progress steps">
      {/* <button className="step done" type="button" data-step="upload">
        <span className="step-node">
          <img
            className="step-icon"
            src={checkIcon}
            alt=""
            aria-hidden="true"
          />
        </span>
        <span className="step-text">Reference</span>
      </button> */}

      <button className={getStepClassName(1)} type="button" data-step="details">
        <span className="step-node">
          <img
            className="step-icon"
            src={checkIcon}
            alt=""
            aria-hidden="true"
          />
        </span>
        <span className="step-text">Preferences</span>
      </button>

      <button className={getStepClassName(2)} type="button" data-step="prompt">
        <span className="step-node">
          <img className="step-icon" src={pinIcon} alt="" aria-hidden="true" />
        </span>
        <span className="step-text">Review</span>
      </button>

      <button
        className={getStepClassName(3)}
        type="button"
        data-step="results"
        disabled
      >
        <span className="step-node">
          <img className="step-icon" src={gridIcon} alt="" aria-hidden="true" />
        </span>
        <span className="step-text">Complete</span>
      </button>
    </nav>
  );
}

export default Stepper;
