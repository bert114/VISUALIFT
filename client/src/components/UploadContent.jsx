import useLoadStore from "../store/useLoadStore.js";
import Loaders from "./loaders.jsx";

const UploadContent = ({ img, onRemove, inputRef }) => {
  const { load } = useLoadStore();

  if (load) {
    return <Loaders />;
  }

  if (img) {
    return (
      <div className="img-wrapper">
        <img src={img} alt="Preview" data-image="preview" />
        <button
          onClick={(e) => onRemove(e, inputRef)}
          className="preview-action preview-remove"
          id="removeImageBtn"
          type="button"
          aria-label="Remove image"
        >
          <div className="icon-preview">x</div>
        </button>
      </div>
    );
  }

  return (
    <>
      <span className="upload-title">
        Drag & Drop your files or <u>Browse</u>
      </span>
      <span className="upload-subtitle">JPG, PNG, WEBP · max 5MB</span>
    </>
  );
};

export default UploadContent;
