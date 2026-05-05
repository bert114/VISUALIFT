import { useState } from "react";
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

function App() {
  const { showToast } = useToastStore();

  const { message, type } = useUIStore().toast;

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
