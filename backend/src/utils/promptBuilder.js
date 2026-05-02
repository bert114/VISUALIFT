export function cleanText(value = "") {
  return String(value).trim().replace(/\s+/g, " ");
}

export function buildFinalPrompt(prompt, userPref = {}) {
  const cleanPrompt = String(prompt || "")
    .replace(/\s+/g, " ")
    .trim();

  const parts = [];

  if (cleanPrompt) {
    parts.push(cleanPrompt);
  }

  if (userPref.imagePurpose) {
    parts.push(`Create this as a ${formatValue(userPref.imagePurpose)}.`);
  }

  if (userPref.background) {
    parts.push(`Use a ${formatValue(userPref.background)} background.`);
  }

  if (userPref.color) {
    parts.push(`Use a ${formatValue(userPref.color)} color palette.`);
  }

  if (userPref.aspectRatio) {
    parts.push(`Aspect ratio: ${userPref.aspectRatio}.`);
  }

  return parts.join(" ");
}

function formatValue(value) {
  return String(value).replace(/_/g, " ").trim();
}
