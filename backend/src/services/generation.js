import LogGeneration from "../model/logGeneration.js";

async function saveLogGeneration({ userId, prompt, result }) {
  const newLog = new LogGeneration({
    userId,
    prompt,
    result,
  });

  const savedLog = await newLog.save();
  return savedLog;
}

export { saveLogGeneration };
