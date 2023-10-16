import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Prompt from "../../models/promtSchema.js";

const GetPromptByUserId = catchAsync(async (req, res) => {
  // finding prompts by user id
  const stringRegex = /^[a-zA-Z0-9_\-]+$/;
  let prompts;
  const searchTerm = req.query.params;
  if (stringRegex.test(searchTerm)) {
    // prompts = await Prompt.find({"user.id":req?.user._id})
    prompts = await Prompt.find({
      $and: [
        { "user.id": req?.user._id }, // Filter by user ID
        {
          $or: [
            { name: { $regex: searchTerm, $options: "i" } }, // Case-insensitive name search
            { description: { $regex: searchTerm, $options: "i" } }, // Case-insensitive description search
          ],
        },
      ],
    })
      .populate("user.id")
      .populate("category subCategory image");
  } else {
    prompts = await Prompt.find({ "user.id": req?.user._id })
      .populate("user.id")
      .populate("category subCategory image");
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Prompts retrived successfully!`,
    data: prompts,
  });
});

export default GetPromptByUserId;
