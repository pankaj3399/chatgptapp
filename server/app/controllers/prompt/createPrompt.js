import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Prompt from "../../models/promtSchema.js";
import User from "../../models/userSchema.js";

const createPrompt = catchAsync(async (req, res) => {
    const userId = req?.user._id;
    const session = await Prompt.startSession();

    try {
        session.startTransaction();

        console.log({
            name: req?.user.name,
            id: userId,
        });

        // Create the prompt
        const result = await Prompt.create([{
            ...req.body,
            user: {
                name: req?.user.name,
                id: userId,
            },
        }], { session });

        // Push new prompt id to user
        await User.updateOne({ _id: userId }, {
            $push: {
                prompts: result._id,
            },
        }, { session });

        await session.commitTransaction();
        session.endSession();

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Category created successfully!",
        });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();

        throw error;
    }
});

export default createPrompt;