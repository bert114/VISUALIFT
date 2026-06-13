export const generateWithOllama = async ({ model, prompt, images }) => {
  const response = await fetch(`${process.env.OLLAMA_URL}/api/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      prompt,
      images,
      stream: false,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new Error("Ollama request failed");
    error.statusCode = response.status;
    error.details = data;
    throw error;
  }

  return data;
};
