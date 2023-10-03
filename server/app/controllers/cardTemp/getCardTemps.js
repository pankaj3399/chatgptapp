import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import CardTemp from "../../models/cardTempSchema.js";

const getCardTemps = catchAsync(async (req, res) => {
  // finding categories
  const datas = await CardTemp.find();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Card temps retrived successfully!`,
    data: datas,
  });
});

export default getCardTemps;
