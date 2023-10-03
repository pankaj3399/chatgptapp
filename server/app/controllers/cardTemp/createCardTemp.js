import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import CardTemp from "../../models/cardTempSchema.js";

const createCardTemp = catchAsync(async (req, res) => {
  // creating user
  await CardTemp.create(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Card image created successfully!`,
  });
});

export default createCardTemp;
