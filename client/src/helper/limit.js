import axios from "axios";

async function getRemaining({ userId }) {
  const data = await axios.get(`http://localhost:5000/api/remaining/${userId}`);

  console.log("Remaining data:", await data);
  return { data };
}

export default getRemaining;
