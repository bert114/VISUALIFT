import React from "react";
import { Outlet } from "react-router-dom";
import Stepper from "../components/Stepper";
import Flow from "../idk/Flow";

function MainLayout() {
  return (
    <>
      <Stepper />
      <Flow />
      <Outlet />
    </>
  );
}

export default MainLayout;
