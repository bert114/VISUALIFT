import axios from "axios";
import { selectedSettings } from "../store/usePromptStore.js";

const sendToInfip = async (obj) => {
  try {
    const { userPref, setUserPref } = selectedSettings.getState();
    const res = await axios.post(
      "http://localhost:5000/api/generate/image",
      obj,
    );

    console.log(res);

    return res.data.result.url + "";
  } catch (error) {
    console.log(error.message);
  }
};

export default sendToInfip;
