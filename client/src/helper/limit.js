import axios from "axios";
import { selectedSettings } from "../store/usePromptStore.js";

async function getRemaining({ userId }) {
  try {
    const data = await axios.get(
      `http://localhost:5000/api/remaining/${userId}`,
    );

    const { remaining } = data.data;

    return { remaining };
  } catch (error) {
    console.log(error.message);
  }
}

export function isAllowed() {
  const { userPref } = selectedSettings.getState();
  return userPref.remaining > 0;
}

export default getRemaining;
