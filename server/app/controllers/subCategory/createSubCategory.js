import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import ApiError from "../../../utils/errors/ApiError.js";
import SubCategory from "../../models/subCategorySchema.js";

const createSubCategory = catchAsync(async (req, res) => {
  // finding category if exists
  const subCategory = await SubCategory.findOne({ name: req.body.name });
  if (subCategory)
    throw new ApiError(httpStatus.BAD_REQUEST, "SubCategory already exists!");

  // creating user
  const result = await SubCategory.create(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `SubCategory created successfully!`,
    data: result,
  });
});

export default createSubCategory;
