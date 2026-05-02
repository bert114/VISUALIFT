import React from "react";
import useImageStore from "../store/useImageStore.js";

function Selections() {
  const { setSelections } = useImageStore();

  return (
    <div className="selection">
      <label className="toggle-wrap">
        <span>No text</span>
        <label className="toggle">
          <input
            type="checkbox"
            onChange={(e) => setSelections({ noText: e.target.checked })}
          />
          <span className="slider"></span>
        </label>
      </label>

      <label className="toggle-wrap">
        <span>Remove BG</span>
        <label className="toggle">
          <input
            type="checkbox"
            onChange={(e) =>
              setSelections({ plainBackground: e.target.checked })
            }
          />
          <span className="slider"></span>
        </label>
      </label>

      <select onChange={(e) => setSelections({ color: e.target.value })}>
        <option value="">Select color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>

      <select onChange={(e) => setSelections({ aspectRatio: e.target.value })}>
        <option value="">Select ratio</option>
        <option value="1:1">1:1</option>
        <option value="16:9">16:9</option>
      </select>
    </div>
  );
}

export default Selections;
