export function waitforElement(selector) {
  return new Promise((resolve, reject) => {
    const imgElement = document.querySelector(selector);

    if (!imgElement) {
      reject(new Error(`Element not found: ${selector}`));
      return;
    }

    imgElement.style.opacity = "0";
    imgElement.style.transition = "opacity 500ms ease-in-out";

    imgElement.onload = () => {
      imgElement.style.opacity = "1";
      resolve(true);
    };

    imgElement.onerror = () => {
      reject(new Error("Image failed to load"));
    };

    if (imgElement.complete) {
      imgElement.style.opacity = "1";
      resolve(true);
    }
  });
}
