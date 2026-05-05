import axios from "axios";

const sendToInfip = async (obj) => {
  const res = await axios.post("http://localhost:5000/api/generate/image", obj);

  return res.data.result.url + "";
};

export default sendToInfip;
