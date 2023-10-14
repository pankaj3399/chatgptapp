import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Prompt from "../../models/promtSchema.js";

const deletePrompt = catchAsync(async (req, res) => {
  const promptId = req.query.params; // Get the prompt ID from the request params
  // Find the prompt by ID and delete it
  const deletedPrompt = await Prompt.findByIdAndDelete(promptId);

  if (!deletedPrompt) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Prompt not found.",
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Prompt deleted successfully.",
      data: deletedPrompt,
    });
  }
});

export default deletePrompt;
