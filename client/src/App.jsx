import { useState } from "react";
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Results from "./pages/Results";
import PromptReview from "./pages/PromptReview";
import Home from "./pages/Home";
import UploadPage from "./pages/UploadPage";
import MainLayout from "./layout/MainLayout";
import Toast from "./components/Toast.jsx";
import useToastStore from "./store/useToastStore.js";
import Flow from "./idk/Flow.jsx";

function App() {
  const { showToast, message, type } = useToastStore();

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
