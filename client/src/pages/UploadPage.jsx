import React, { use, useRef } from "react";
import { useAppNavigate } from "../hooks/useAppNavigate.jsx";
import useImageStore, { requestStore } from "../store/useImageStore.js";
import Selections from "../components/Selections.jsx";
import fileIcon from "../assets/img/file.png";
import { useEffect } from "react";
import { useState } from "react";
import useImageStore1 from "../store/useImageStorecopy.js";
import { preventDropDefault } from "../helper/helperImage.js";
import Loaders from "../components/loaders.jsx";
import useLoadStore from "../store/useLoadStore.js";
import UploadContent from "../components/UploadContent.jsx";
import GenerationPreferences from "../components/GeneralPreference.jsx";

function UploadPage() {
  const inputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const { removeImage, handleImage1, img } = useImageStore1();
  const { load, setLoad } = useLoadStore();

  return (
    <div className="reference">
      <section
        onDrop={(e) => handleImage1(e)}
        onDragOver={(e) => e.preventDefault()}
        id="screen-upload"
        className="screen active"
      >
        <div className="panel upload-preferences-panel">
          <div className="upload-preferences-grid">
            <div className="upload-column">
              <h2>Upload reference</h2>
              <p className="muted">Start with one JPG, PNG, or WEBP image.</p>

              <label className="upload-box" id="uploadBox">
                <input
                  ref={inputRef}
                  onChange={handleImage1}
                  id="imageInput"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  hidden
                />
                <UploadContent
                  img={img}
                  onRemove={removeImage}
                  inputRef={inputRef}
                />
              </label>
              {/* 
            <p id="uploadError" className="error" role="alert"></p> */}

              {/* <button onClick={test}>Send</button> */}
            </div>
          </div>
        </div>
        {/* <img src={img} alt="Preview" data-image="preview" /> */}
      </section>

      <GenerationPreferences />
    </div>
  );
}

export default UploadPage;
