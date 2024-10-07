import config from "../../config";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import bcryptJs from "bcryptjs";

const createUserIntoDB = async (userData: TUser) => {
  if (userData.password) {
    userData.password = await bcryptJs.hash(
      userData.password,
      Number(config.bcrypt_salt_rounds)
    );
  }
  const user = await User.create(userData);

  return user;
};
const getUserFromDB = async (query: any) => {
  const { email } = query;
  if (email) {
    const user = await User.findOne({ email });
    return user;
  } else {
    const user = await User.find();
    return user;
  }
};

export const userServices = { createUserIntoDB, getUserFromDB };
