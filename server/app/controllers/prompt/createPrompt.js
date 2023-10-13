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
    console.log(req.body);
    console.log("hello")
    if (req.body.id) {
      // If an _id is provided, update the existing prompt
      const existingPrompt = await Prompt.findById(req.body.id);

      if (!existingPrompt) {
        throw new Error("Prompt not found"); // Handle this error as needed
      }

      // Update the existing prompt
      Object.assign(existingPrompt, {
        ...req.body,
        user: {
          name: req?.user.name,
          id: userId,
        },
        company: req?.user.company,
        library: "company",
      });
      console.log(existingPrompt)
      const updatedPrompt = await existingPrompt.save({ session });

      // Handle any additional logic for updating prompts
    } else {
      // If no _id is provided, create a new prompt
      const result = await Prompt.create(
        [
          {
            ...req.body,
            user: {
              name: req?.user.name,
              id: userId,
            },
            company: req?.user.company,
            library: "company",
          },
        ],
        { session }
      );

      // Push new prompt id to user
      await User.updateOne(
        { _id: userId },
        {
          $push: {
            prompts: result[0]._id,
          },
        },
        { session }
      );
    }

    await session.commitTransaction();
    session.endSession();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Prompt created/updated successfully!",
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    throw error;
  }
});

export default createPrompt;
