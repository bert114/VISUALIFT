import { useState, useEffect } from "react";
import { selectedSettings } from "../store/usePromptStore.js";

export function useHistory() {
  const [savedImages, setSavedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { userId } = selectedSettings().userPref;

  useEffect(() => {
    if (userId) {
      loadHistory();
    }
  }, [userId]);

  const loadHistory = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/history/${userId}`,
      );
      const data = await response.json();
      setSavedImages(data.images);
    } catch (err) {
      setError("Failed to load history");
    } finally {
      setLoading(false);
    }
  };

  const saveImage = async (imageUrl, prompt) => {
    try {
      console.log(userId);
      const response = await fetch("http://localhost:5000/api/save-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl, prompt, userId }),
      });

      if (response.ok) {
        const newImage = await response.json();
        setSavedImages((prev) => [newImage, ...prev]);
        return true;
      }
      return false;
    } catch (err) {
      setError("Failed to save");
      return false;
    }
  };

  const deleteImage = async (imageId) => {
    console.log(imageId);
    try {
      const response = await fetch(
        `http://localhost:5000/api/images/${imageId}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        setSavedImages((prev) => prev.filter((img) => img.id !== imageId));
        await loadHistory();
        return true;
      }
      return false;
    } catch (err) {
      setError("Failed to delete");
      return false;
    }
  };

  return {
    savedImages,
    loading,
    error,
    saveImage,
    deleteImage,
    refreshHistory: loadHistory,
  };
}
