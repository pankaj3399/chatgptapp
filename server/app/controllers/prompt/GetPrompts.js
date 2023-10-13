import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Prompt from "../../models/promtSchema.js";

const GetPrompts = catchAsync(async (req, res) => {
  // finding categories
  console.log(req.query.params, "Hello");


  const stringRegex = /^[a-zA-Z0-9_\-]+$/;
  let prompts;
  const searchTerm = req.query.params;
  if (stringRegex.test(searchTerm)) {
    // prompts = await Prompt.find({"user.id":req?.user._id})
    prompts = await Prompt.find({
      $and: [ // Filter by user ID
        {
          $or: [
            { name: { $regex: searchTerm, $options: "i" } }, // Case-insensitive name search
            { description: { $regex: searchTerm, $options: "i" } }, // Case-insensitive description search
          ],
        },
      ],
    })
    .or([{ company: req?.user.company }, { library: "master" }])
    .populate("user.id")
    .populate("category subCategory image")
    .sort({ _id: -1 });
  } else
    prompts = await Prompt.find({ "user.id": req?.user._id })
    .or([{ company: req?.user.company }, { library: "master" }])
    .populate("user.id")
    .populate("category subCategory image")
    .sort({ _id: -1 });


  const data = await Prompt.find()
    .or([{ company: req?.user.company }, { library: "master" }])
    .populate("user.id")
    .populate("category subCategory image")
    .sort({ _id: -1 });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Prompts retrived successfully!`,
    data: prompts,
  });
});

export default GetPrompts;
