const BANNER_CONTENT = {
  analyzing: {
    icon: "✦",
    title: "Creating your prompt",
    message: "Analyzing your reference image and applying your preferences.",
    showProgress: true,
    statuses: [
      "Reading image details…",
      "Detecting subject and background…",
      "Preparing editable prompt…",
    ],
  },

  generating: {
    icon: "✦",
    title: "Creating your images",
    message: "Generating image options from your reviewed prompt.",
    showProgress: true,
    statuses: [
      "Preparing image layout…",
      "Applying style and preferences…",
      "Rendering image options…",
    ],
  },

  review: {
    icon: "✓",
    title: "Prompt ready",
    message: "Your editable prompt has been created.",
    showProgress: false,
  },

  complete: {
    icon: "✓",
    title: "Images ready",
    message: "Your generated image options are ready to review.",
    showProgress: false,
  },

  error: {
    icon: "!",
    title: "Something went wrong",
    message: "We couldn’t complete this step. Please try again.",
    showProgress: false,
  },
};

export default BANNER_CONTENT;
