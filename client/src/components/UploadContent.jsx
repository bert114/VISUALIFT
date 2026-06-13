import useUIStore from "../store/useUIStore.js";
import Loaders from "./loaders.jsx";

const UploadContent = ({ img, onRemove, inputRef }) => {
  const { loading, state } = useUIStore();

  if (state === "upload") return <Loaders />;

  if (!img) {
    return (
      <>
        <span className="upload-title">
          Drag & Drop your files or <u>Browse</u>
        </span>
        <span className="upload-subtitle">JPG, PNG, WEBP · max 5MB</span>
      </>
    );
  }

  return (
    <div className={`img-wrapper ${state}`}>
      <img src={img} alt="Preview" data-image="preview" />

      {state === "analyzing" && (
        <div className="image-loader-overlay">
          <Loaders />
          <span>Analyzing image...</span>
        </div>
      )}

      {state === "initial" && (
        <button
          onClick={(e) => onRemove(e, inputRef)}
          className="preview-action preview-remove"
          id="removeImageBtn"
          type="button"
          aria-label="Remove image"
        >
          <div className="icon-preview">x</div>
        </button>
      )}
    </div>
  );
};

export default UploadContent;
