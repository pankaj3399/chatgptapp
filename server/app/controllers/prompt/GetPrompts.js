import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Prompt from "../../models/promtSchema.js";

const GetPrompts = catchAsync(
    async (req, res) => {

        // finding categories
        const datas = await Prompt.find()
            .populate('user.id')
            .populate("category subCategory image")
            .sort({ _id: -1 });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Prompts retrived successfully!`,
            data: datas
        });
    }
)

export default GetPrompts