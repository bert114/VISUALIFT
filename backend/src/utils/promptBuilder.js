export function cleanText(value = "") {
  return String(value).trim().replace(/\s+/g, " ");
}

export function buildFinalPrompt(obj = {}) {
  const cleanPrompt = String(obj.describeImage || "")
    .replace(/\s+/g, " ")
    .trim();

  const parts = [];

  if (cleanPrompt) {
    parts.push(cleanPrompt);
  }

  if (obj.imagePurpose) {
    parts.push(`Create this as a ${formatValue(obj.imagePurpose)}.`);
  }

  if (obj.background) {
    parts.push(`Use a ${formatValue(obj.background)} background.`);
  }

  if (obj.color) {
    parts.push(`Use a ${formatValue(obj.color)} color palette.`);
  }

  if (obj.aspectRatio) {
    parts.push(`Aspect ratio: ${obj.aspectRatio}.`);
  }

  return parts.join(" ");
}

function formatValue(value) {
  return String(value).replace(/_/g, " ").trim();
}
