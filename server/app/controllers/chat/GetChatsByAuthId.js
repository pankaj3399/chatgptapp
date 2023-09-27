import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Chat from "../../models/chatSchema.js";

const GetChatsByAuthId = catchAsync(
    async (req, res) => {

        // finding chats
        const chats = await Chat.find({ user: req.user._id }).sort({ _id: -1 });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Chats retrived successfully!`,
            data: chats
        });
    }
)

export default GetChatsByAuthId