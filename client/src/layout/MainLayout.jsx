import React from "react";
import { Outlet } from "react-router-dom";
import Stepper from "../components/Stepper";
import Flow from "../idk/Flow";
import ProcessingBanner from "../components/ProcessingBanner";
import useUIStore from "../store/useUIStore.js";
import useImageStore from "../store/useImageStorecopy.js";
import {
  Show,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/react";

function MainLayout() {
  const { loading, state } = useUIStore();
  const { img } = useImageStore();

  return (
    <>
      <header>
        <h1 className="logo">VISUALIFT</h1>

        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
          <SignOutButton />
        </Show>
      </header>
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
