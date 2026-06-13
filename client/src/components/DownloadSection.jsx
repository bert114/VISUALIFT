import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { checkLoaded } from "../helper/util.js";

function DownloadSection() {
  const data = useMemo(
    () => ({
      background: "Solid white",
      color: "#00E5FF",
      imagePurpose: "All",
      images: [
        {
          url: "https://res.cloudinary.com/dmincuczc/image/upload/v1777960306/uploads/file_ritt1j.jpg",
        },
        {
          url: "https://res.cloudinary.com/dmincuczc/image/upload/v1777960306/uploads/file_ritt1j.jpg",
        },
        {
          url: "https://res.cloudinary.com/dmincuczc/image/upload/v1777960306/uploads/file_ritt1j.jpg",
        },
      ],
      model: "img4",
      n: 1,
      prompt: "A vibrant oil painting of a futuristic cityscape at sunset",
      response_format: "url",
      size: "1792x1024",
    }),
    [],
  );

  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    if (!data?.images?.length) return;

    setLoadedImages({});

    checkLoaded(data.images, setLoadedImages);
  }, [data.images]);

  return (
    <section className="inspiration-panel">
      <div className="inspiration-header">
        <div>
          <p className="eyebrow">Generated Inspiration</p>
          <h2>3. Choose your best direction</h2>
          <p className="subtitle">
            Mock results are shown for prototype testing. Click one or more
            cards to select.
          </p>
        </div>

        <div className="actions">
          <button>Select All</button>
          <button>Regenerate</button>
          <button className="primary">Download Selection</button>
          <button>Start New</button>
        </div>
      </div>

      <div className="cards">
        {data.images?.length > 0 ? (
          data.images.map((img, index) => (
            <div className="option-card" key={`${img.url}-${index}`}>
              <div className="image-preview">
                {!loadedImages[index] && <p>Loading image...</p>}

                {loadedImages[index] && (
                  <img
                    className="generated-image"
                    src={img.url}
                    alt={`Generated option ${index + 1}`}
                  />
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No generated images yet.</p>
        )}
      </div>

      <div className="prompt-box">
        <strong>Prompt used:</strong>
        <p>{data.prompt}</p>
      </div>
    </section>
  );
}

export default DownloadSection;
