import React, { useEffect, useState } from "react";
import PreferenceBlock from "./PreferenceBlock.jsx";
import { getNumber } from "../../helper/helper.js";
import { selectedSettings } from "../../store/usePromptStore.js";
import { models } from "../../static/constantfile.js";

function ImageCount() {
  const [numberOptions, setNumberOptions] = useState([1]);
  const { userPref, setUserPref } = selectedSettings() || {};
  const { model } = userPref;

  useEffect(() => {
    setNumberOptions(getNumber(model));
  }, [model]);

  return (
    <PreferenceBlock title="Number of Images">
      <select
        className="image-count-select"
        onChange={(e) => setUserPref("n", e.target.value)}
      >
        {numberOptions.map((n) => {
          return (
            <option key={n} value={n}>
              {n}
            </option>
          );
        })}
      </select>
    </PreferenceBlock>
  );
}

export default ImageCount;
