import config from "../../config";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import bcryptJs from "bcryptjs";
import { createToken } from "./user.utils";
import { AppError } from "../../error/AppError";
import httpStatus from "http-status";

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
const getSpacificUserFromDB = async (id: any) => {
  const result = await User.findById({ _id: id });
  return result;
};
const UpdateSpacificUserFromDB = async (id: any, payload: any) => {
  const user = await User.findById(id);
  const myUser = await User.findById(payload.followerId);

  if (!user) {
    throw new Error("User not found");
  }
  if (!myUser) {
    throw new Error("User not found");
  }

  // Check if the user is already followed by the followerId
  const isFollowing = user.followers.includes(payload.followerId);
  const isfollowed = user.followers.includes(id);

  if (isFollowing) {
    user.followers = user.followers.filter(
      (id) => id.toString() !== payload.followerId
    );
  } else {
    // Follow the user (add followerId to the array)
    user.followers.push(payload.followerId);
  }
  if (isfollowed) {
    myUser.followed = myUser.followed.filter(
      (users) => users.toString() !== id
    );
  } else {
    myUser.followed.push(id);
  }
  // Save the updated user
  await user.save();
  await myUser.save();
  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const coverImageFromDB = async (id: any, payload: TUser) => {
  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const LoginUserFromDB = async (payload: any) => {
  const user = await User.findOne({ email: payload.email });

  if (!user) {
    const users = await createUserIntoDB(payload);

    const jwtPayload = {
      email: users.email,
      role: users.role,
    };

    const accessToken = createToken(
      jwtPayload,
      process.env.JWT_ACCEESS_SECRET as string,
      process.env.JWT_ACCEESS_TOKEN_EXPIRE as string
    );

    const refreshToken = createToken(
      jwtPayload,
      process.env.JWT_REFRSH_SECRET as string,
      process.env.JWT_REFRSH_TOKEN_EXPIRE as string
    );

    return {
      accessToken,
      refreshToken,
      user,
    };
  } else {
    if (payload.password) {
      const isPasswordMatched = await bcryptJs.compare(
        payload.password,
        user.password
      );

      if (!isPasswordMatched) {
        throw new AppError(httpStatus.NOT_FOUND, "Password Incorrect!");
      }
    }
    const jwtPayload = {
      email: user.email,
      role: user.role,
      _id: user._id,
    };

    const accessToken = createToken(
      jwtPayload,
      process.env.JWT_ACCEESS_SECRET as string,
      process.env.JWT_ACCEESS_TOKEN_EXPIRE as string
    );
    console.log("accessToken", accessToken);
    const refreshToken = createToken(
      jwtPayload,
      process.env.JWT_REFRSH_SECRET as string,
      process.env.JWT_REFRSH_TOKEN_EXPIRE as string
    );
    console.log("refreshToken", refreshToken);
    return {
      accessToken,
      refreshToken,
      user,
    };
  }
};

export const userServices = {
  createUserIntoDB,
  getUserFromDB,
  LoginUserFromDB,
  getSpacificUserFromDB,
  UpdateSpacificUserFromDB,
  coverImageFromDB,
};
