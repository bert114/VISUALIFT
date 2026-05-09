import { useState } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import usePromptStore from "../store/usePromptStore.js";

const galleryItems = [
  {
    id: 1,
    title: "Image 1",
    image:
      "https://res.cloudinary.com/dmincuczc/image/upload/v1777960306/uploads/file_ritt1j.jpg",
    alt: "Generated visual 1",
    prompt:
      "A futuristic technology concept with glowing interface elements and high contrast lighting.",
  },
  {
    id: 2,
    title: "Image 2",
    image:
      "https://res.cloudinary.com/dmincuczc/image/upload/v1777960306/uploads/file_ritt1j.jpg",
    alt: "Generated visual 2",
    prompt:
      "A digital innovation scene using electric blue and neon cyan highlights.",
  },
  {
    id: 3,
    title: "Image 3",
    image:
      "https://res.cloudinary.com/dmincuczc/image/upload/v1777960306/uploads/file_ritt1j.jpg",
    alt: "Generated visual 3",
    prompt:
      "A modern software launch visual with a clean dark interface and glowing accents.",
  },
  {
    id: 4,
    title: "Image 4",
    image:
      "https://res.cloudinary.com/dmincuczc/image/upload/v1777960306/uploads/file_ritt1j.jpg",
    alt: "Generated visual 4",
    prompt:
      "A high-tech AI interface with layered depth, glass surfaces, and cyan lighting.",
  },
];

export default function GalleryReviewLayout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { handleReset } = usePromptStore();

  const activeItem = galleryItems[activeIndex];

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? galleryItems.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === galleryItems.length - 1 ? 0 : current + 1,
    );
  };

  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageUrl.split("/").pop() || "generated-image";
    link.click();
  };

  return (
    <main className="gallery-review">
      <section className="gallery-review__layout">
        <section className="gallery-carousel" aria-label="Image carousel">
          <div className="gallery-carousel__stage">
            <button
              className="gallery-carousel__nav gallery-carousel__nav--left"
              type="button"
              onClick={goPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft size={26} />
            </button>

            <div className="gallery-carousel__image-frame">
              <img
                className="gallery-carousel__image"
                src={activeItem.image}
                alt={activeItem.alt}
              />

              <button
                className="gallery-carousel__download"
                type="button"
                onClick={() => handleDownload(activeItem.image)}
                aria-label="Download selected image"
              >
                <Download size={22} />
              </button>
            </div>

            <button
              className="gallery-carousel__nav gallery-carousel__nav--right"
              type="button"
              onClick={goNext}
              aria-label="Next image"
            >
              <ChevronRight size={26} />
            </button>
          </div>

          <div className="gallery-carousel__thumbs">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                className={`gallery-carousel__thumb ${
                  index === activeIndex ? "is-active" : ""
                }`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Select ${item.title}`}
              >
                <img src={item.image} alt={item.alt} />

                <span className="gallery-carousel__thumb-download">
                  <Download size={14} />
                </span>
              </button>
            ))}
          </div>
        </section>

        <aside className="image-details" aria-label="Selected image details">
          <div className="image-details__top">
            <div>
              <p className="image-details__label">Selected Image</p>
              <h2 className="image-details__title">{activeItem.title}</h2>
            </div>

            <button
              className="image-details__download-button"
              type="button"
              onClick={() => handleDownload(activeItem.image)}
            >
              <Download size={18} />
              Download selected image
            </button>
          </div>

          <div className="image-details__section">
            <h3 className="image-details__section-title">Generated images</h3>

            <div className="image-details__chips">
              {galleryItems.map((item, index) => (
                <button
                  key={item.id}
                  className={`image-details__chip ${
                    index === activeIndex ? "is-active" : ""
                  }`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="image-details__section">
            <h3 className="image-details__section-title">Your prompt</h3>
            <p className="image-details__prompt">{activeItem.prompt}</p>
          </div>

          <div className="image-details__actions">
            <button
              className="image-details__action image-details__action--secondary"
              type="button"
            >
              Regenerate
            </button>

            <button
              className="image-details__action image-details__action--ghost"
              type="button"
              onClick={handleReset}
            >
              Start Over
            </button>

            <button
              className="image-details__action image-details__action--primary"
              type="button"
            >
              <Download size={16} />
              Download all
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}
