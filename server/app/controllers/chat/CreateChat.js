import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Chat from "../../models/chatSchema.js";
import config from "../../../utils/server/config.js";
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

const CreateChat = catchAsync(async (req, res) => {
  // message
  let resData;
  const { message, role, chatId, model } = req.body;

  // user information
  const { user } = req;
  const userId = user._id;

  const client = new OpenAIClient(
    String(config.OPEN_AI_ENDPOINT),
    new AzureKeyCredential(String(config.OPENAI_API_KEY))
  );

  // query for chats
  const foundChats = await Chat.findById(chatId);

  // default data
  let data = {
    user: userId,
    messages: [],
  };

  const newMsg = {
    role: role,
    content: message,
    createdContentAt: Date.now(),
  };

  if (foundChats) {
    foundChats.messages.map((item) => {
      data.messages.push({
        role: item.role,
        content: item.content,
      });
    });
    data = {
      ...data,
      messages: [...data.messages, newMsg],
    };
  } else {
    data = {
      ...data,
      title: message,
      model,
      messages: [newMsg],
    };
  }

  const events = client.listChatCompletions(
    config.OPEN_AI_DEPLOYMENT_NAME,
    data.messages,
    {
      maxTokens: 2000,
      temperature: 0.3,
      topP: 0.95,
      frequencyPenalty: 0,
      presencePenalty: 0,
      stop: ["<|im_end|>"],
    }
  );
  let responseText = "";

  for await (const event of events) {
    for (const choice of event.choices) {
      const delta = choice.delta?.content;
      if (delta !== undefined) {
        responseText += delta;
      }
    }
  }

  if (responseText) {
    data = {
      ...data,
      messages: [
        ...data.messages,
        {
          role: "assistant",
          content: responseText,
          createdContentAt: Date.now(),
        },
      ],
    };
  }

  if (chatId) {
    const updatedDoc = await Chat.updateOne(
      { _id: chatId },
      {
        $push: {
          messages: [
            data.messages[data.messages.length - 2],
            data.messages[data.messages.length - 1],
          ],
        },
      },
      { new: true, runValidators: true }
    );

    if (updatedDoc.acknowledged && updatedDoc.modifiedCount === 1) {
      resData = await Chat.findOne({ _id: chatId });
    }
  } else {
    resData = new Chat(data);
    await resData.save();
  }

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Chat generated successfully",
    data: resData,
  });
});

export default CreateChat;
