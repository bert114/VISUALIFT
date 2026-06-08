import axios from "axios";
import { selectedSettings } from "../store/usePromptStore.js";

const sendToInfip = async (obj) => {
  const { userPref, setUserPref } = selectedSettings.getState();
  const res = await axios.post("http://localhost:5000/api/generate/image", obj);

  console.log(res);

  setUserPref("remaining", res.data.rateLimitInfo.remaining);

  return res.data.result.url + "";
};

export default sendToInfip;
