import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Chat from "../../models/chatSchema.js";
import config from "../../../utils/server/config.js";
// const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

const CreateChat = catchAsync(
    async (req, res) => {

        // message
        let resData;
        const { message, role, chatId } = req.body;

        // user information
        const { user } = req;
        const userId = user._id;

        const client = new OpenAIClient(
            String(config.OPEN_AI_ENDPOINT),
            new AzureKeyCredential(String(config.OPENAI_API_KEY))
        );

        const response = await client.getCompletions(
            String(config.OPEN_AI_DEPLOYMENT_NAME),
            [message],
            { stop: ["\n"] }
        );

        const completion = response.choices[0].text;

        const data = {
            user: userId,
            messages: [
                {
                    role: role,
                    content: message,
                    createdContentAt: Date.now()
                },
                {
                    role: "assistant",
                    content: completion,
                    createdContentAt: Date.now()
                },
            ]
        }

        if (chatId) {
            const updatedDoc = await Chat.updateOne({ _id: chatId }, {
                $push: {
                    messages: data.messages
                }
            }, { new: true, runValidators: true })

            if (updatedDoc.acknowledged && updatedDoc.modifiedCount === 1) {
                resData = await Chat.findOne({ _id: chatId });
            }
        } else {
            const resData = new Chat(data);
            await resData.save();
        }

        sendResponse(res, {
            statusCode: httpStatus.CREATED,
            success: true,
            message: "Chat generated successfully",
            data: resData,
        });
    }
)

export default CreateChat