import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import ApiError from "../../../utils/errors/ApiError.js";
import Category from "../../models/categorySchema.js";

const createCategory = catchAsync(
    async (req, res) => {

        // finding category if exists
        const category = await Category.findOne({ name: req.body.name });
        if (category) throw new ApiError(httpStatus.BAD_REQUEST, 'Category already exists!');

        // creating user
        await Category.create(req.body);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Category created successfully!`,
        });
    }
)

export default createCategory