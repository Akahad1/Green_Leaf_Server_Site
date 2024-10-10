import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { commentServies } from "./comment.services";

const createComment = catchAsync(async (req, res) => {
  console.log(req.body);

  const result = await commentServies.createCommentIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Comment Create Successfully",
    data: result,
  });
});
const getComment = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await commentServies.getCommentFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Comment get Successfully",
    data: result,
  });
});
const deleteSpacificComment = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await commentServies.deleteCommentFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Comment deleted Successfully",
    data: result,
  });
});
const updateSpacificComment = catchAsync(async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const result = await commentServies.updateCommentFromDB(id, body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Comment update Successfully",
    data: result,
  });
});
export const commentController = {
  createComment,
  getComment,
  deleteSpacificComment,
  updateSpacificComment,
};
