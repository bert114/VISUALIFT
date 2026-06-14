import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
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
import { selectedSettings } from "../store/usePromptStore.js";
import { useEffect } from "react";
import { useState } from "react";
import History from "../pages/History.jsx";

function MainLayout() {
  const { loading, state } = useUIStore();
  const { img } = useImageStore();
  const { userPref, setUserPref } = selectedSettings();
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const { remaining } = userPref;
    console.log(remaining);
    setRemaining(remaining);
  }, [userPref]);

  return (
    <>
      <header>
        <h1 className="logo">VISUALIFT</h1>

        <div className="auth-container">
          <Show when="signed-out">
            <SignInButton />
            <SignUpButton />
          </Show>
          <Show when="signed-in">
            <div className="user-profile-group">
              <Link to="/history" className="history-link">
                History
              </Link>
              <UserButton />
            </div>
          </Show>
        </div>
      </header>

      <Routes>
        <Route path="/history" element={<History />} />
        <Route path="/" element={<Flow />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default MainLayout;
