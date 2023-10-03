import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Category from "../../models/categorySchema.js";

const GetCategories = catchAsync(async (req, res) => {
  // finding categories
  const categories = await Category.find()
    .populate("subCategories")
    .sort({ _id: -1 });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Category retrived successfully!`,
    data: categories,
  });
});

export default GetCategories;
