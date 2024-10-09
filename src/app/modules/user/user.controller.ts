import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { userServices } from "./user.services";

const createUser = catchAsync(async (req, res) => {
  // const userData = req.body;
  console.log(req.body);
  console.log(req.file);
  const result = await userServices.createUserIntoDB({
    ...JSON.parse(req.body.data),
    image: req.file?.path,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});
const getUser = catchAsync(async (req, res) => {
  const qurey = req.query;
  const result = await userServices.getUserFromDB(qurey);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get User  successfully",
    data: result,
  });
});
const loginUser = catchAsync(async (req, res) => {
  const result = await userServices.LoginUserFromDB(req.body);

  // res.cookie("refreshToken", refreshToken, {
  //   secure: config.node_env === "production",
  //   httpOnly: true,
  // });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",

    data: result,
  });
});

export const userController = {
  createUser,
  getUser,
  loginUser,
};
