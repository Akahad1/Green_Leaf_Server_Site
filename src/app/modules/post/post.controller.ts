import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { PostServices } from "./post.services";

const createPost = catchAsync(async (req, res) => {
  console.log("body data", JSON.stringify(req.body, null, 2));
  console.log("file data", req.file);
  const result = await PostServices.createPostIntoDB({
    ...req.body,
    image: req.file?.path,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Post Create Successfully",
    data: result,
  });
});
const getPost = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await PostServices.getPostFromDB(query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get Post  Successfully",
    data: result,
  });
});
const getSpacificPost = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await PostServices.getSpacificPostFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get Spacific Post  Successfully",
    data: result,
  });
});
const getGroupPost = catchAsync(async (req, res) => {
  const { groupId } = req.params;
  const result = await PostServices.getGroupPostFromDB(groupId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get Group Post  Successfully",
    data: result,
  });
});
const getAllGroupPost = catchAsync(async (req, res) => {
  const result = await PostServices.getAllGroupPostFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get All Group Post  Successfully",
    data: result,
  });
});
const deleteSpacificPost = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await PostServices.deleteSpacificPostFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "delete Spacific Post  Successfully",
    data: result,
  });
});
const updateSpacificPost = catchAsync(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const result = await PostServices.updatePostFromDB(id, body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Update Post  Successfully",
    data: result,
  });
});

export const postController = {
  createPost,
  getPost,
  getSpacificPost,
  updateSpacificPost,
  deleteSpacificPost,
  getGroupPost,
  getAllGroupPost,
};
