import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Prompt from "../../models/promtSchema.js";

const GetPromptByUserId = catchAsync(
    async (req, res) => {

        console.log(req.user);

        // finding prompts by user id
        const prompts = await Prompt.find({ 'user.id': req?.user._id });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Prompts retrived successfully!`,
            data: prompts
        });
    }
)

export default GetPromptByUserId