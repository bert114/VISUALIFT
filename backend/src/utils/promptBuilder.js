export function cleanText(value = "") {
  return String(value).trim().replace(/\s+/g, " ");
}

export function buildFinalPrompt(description, userPref) {
  const parts = [];

  parts.push(description);

  if (userPref.imagePurpose) {
    parts.push(`Purpose: ${userPref.imagePurpose}.`);
  }

  if (userPref.background) {
    parts.push(`Background: ${userPref.background}.`);
  }

  if (userPref.color) {
    parts.push(`Color palette: ${userPref.color}.`);
  }

  if (userPref.aspectRatio) {
    parts.push(`Aspect ratio: ${userPref.aspectRatio}.`);
  }

  return parts.join("\n");
}
