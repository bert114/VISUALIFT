import React from "react";
import PreferenceBlock from "./PreferenceBlock.jsx";

function ImageCount() {
  return (
    <PreferenceBlock title="Number of Images">
      <select
        className="image-count-select"
        onChange={(e) => setNumberOfImages(e.target.value)}
      >
        <option>Auto — depends on selected model</option>
        <option>1 image</option>
        <option>2 images</option>
        <option>4 images</option>
      </select>
    </PreferenceBlock>
  );
}

export default ImageCount;
