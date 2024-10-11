import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { userServices } from "./user.services";

const createUser = catchAsync(async (req, res) => {
  console.log("body data", JSON.stringify(req.body, null, 2));
  console.log("file data", req.file);
  const result = await userServices.createUserIntoDB({
    ...req.body,
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
const getSpacificUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await userServices.getSpacificUserFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get  spacific User  successfully",
    data: result,
  });
});
const updateSpacificUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log("body data", JSON.stringify(req.body, null, 2));
  console.log("file data", req.file);
  const result = await userServices.UpdateSpacificUserFromDB(id, {
    ...req.body,
    image: req.file?.path,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Update  spacific User  successfully",
    data: result,
  });
});
const updateCoverPhoto = catchAsync(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log("body data", JSON.stringify(req.body, null, 2));
  console.log("file data", req.file);
  const result = await userServices.coverImageFromDB(id, {
    ...req.body,
    coverImage: req.file?.path,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Update  coverImage  successfully",
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
  getSpacificUser,
  updateSpacificUser,
  updateCoverPhoto,
};
