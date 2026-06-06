import { json } from "zod";
import User from "../model/userModel.js";

const getUserById = async (userId) => {
  if (!userId) return null;

  const user = await User.findOne({ _id: userId });
  console.log(user);
  return user;
};

export { getUserById };
