import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { PostServices } from "./post.services";

const createPost = catchAsync(async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const result = await PostServices.createPostIntoDB({
    ...JSON.parse(req.body.data),
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
  const result = await PostServices.getPostFromDB();
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
};
