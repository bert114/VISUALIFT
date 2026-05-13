import React from "react";
import { Outlet } from "react-router-dom";
import Stepper from "../components/Stepper";
import Flow from "../idk/Flow";
import ProcessingBanner from "../components/ProcessingBanner";
import useUIStore from "../store/useUIStore.js";
import useImageStore from "../store/useImageStorecopy.js";

function MainLayout() {
  const { loading, state } = useUIStore();
  const { img } = useImageStore();

  return (
    <>
      <Stepper />

      <div className={`status-slot ${loading ? "is-visible" : ""}`}>
        {loading && <ProcessingBanner />}
      </div>

      <Flow />
      <Outlet />
    </>
  );
}

export default MainLayout;
