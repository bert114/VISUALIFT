import React from "react";
import { useHistory } from "../hooks/useHistory.jsx";
import { selectedSettings } from "../store/usePromptStore.js";

function History() {
  const { userId } = selectedSettings().userPref;
  const { savedImages, loading, error, deleteImage } = useHistory(userId);

  if (loading) return <div>Loading your gallery...</div>;
  if (error) return <div>⚠️ {error}</div>;

  return (
    <div className="history-container">
      <h2>Your Saved Images ({savedImages.length})</h2>

      {loading && <div className="loading-state">Loading your gallery...</div>}
      {error && <div className="error-state">⚠️ {error}</div>}

      {!loading && !error && savedImages.length === 0 && (
        <p>No saved images yet. Generate and save some!</p>
      )}

      {!loading && !error && savedImages.length > 0 && (
        <div className="gallery">
          {savedImages.map((image) => (
            <div key={image.id} className="image-card">
              <img src={image.imageUrl} alt={image.prompt} />
              <p>{image.prompt}</p>
              <small>
                Saved: {new Date(image.savedAt).toLocaleDateString()}
              </small>
              <button onClick={() => deleteImage(image._id)}> Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
