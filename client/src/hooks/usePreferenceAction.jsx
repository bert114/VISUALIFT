import { selectedSettings } from "../store/usePromptStore.js";

export function usePreferenceActions() {
  const {
    setImagePurpose,
    setModel,
    setBackground,
    setColor,
    setAspectRatio,
    setNumberOfImages,
  } = selectedSettings();

  return {
    setImagePurpose,
    setModel,
    setBackground,
    setColor,
    setAspectRatio,
    setNumberOfImages,
  };
}
