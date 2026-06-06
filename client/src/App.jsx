import { useEffect, useState } from "react";
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Results from "./pages/Results";

import Home from "./pages/Home";
import UploadPage from "./pages/UploadPage";
import MainLayout from "./layout/MainLayout";
import Toast from "./components/Toast.jsx";
import useToastStore from "./store/useToastStore.js";
import Flow from "./idk/Flow.jsx";
import useUIStore from "./store/useUIStore.js";
import { useAuth, useSession, useUser } from "@clerk/react";
import getRemaining from "./helper/limit.js";
import userGenerateStore from "./store/userDataStore.js";
import { selectedSettings } from "./store/usePromptStore.js";

function App() {
  const { showToast } = useToastStore();

  const { message, type } = useUIStore().toast;
  const { user } = useUser();
  const { session } = useSession();
  const { getToken } = useAuth();
  const { setCurrentUser } = userGenerateStore();
  const { setUserPref, userPref } = selectedSettings();

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      const token = await getToken();
      const { id, role = "user" } = user;

      console.log("test:", id);
      await getRemaining({ userId: id });

      setUserPref("userId", user.id);
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    if (userPref) {
      console.log("User Preferences:", userPref);
    }
  }, [userPref]);

  return (
    <>
      <Toast
        message={message}
        type={type}
        onClose={() => showToast("", "success")}
      />

      <MainLayout />
    </>
  );
}

export default App;
