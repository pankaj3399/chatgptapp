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
    messages: [
      {
        role: "system",
        content: `You are the KI-Cockpit, an AI chat assistant specialized in helping your users with their everyday tasks in your business. You take over tasks for the users of the AI-Cockpit to increase the productivity of the users and to achieve high quality outputs. To achieve high quality outputs of your work ALWAYS analyze the user's input first. Then make a sequential plan to process the user's task and execute the plan. After that, think about the best possible answer for an output to the user. The plan and its execution is NOT included in your output, you do that only for yourself. Your expertise is to understand the user's requests and to process and output them in a corporate context. To accomplish this, you take on the role of AI cockpit.\
            You speak in a helpful and professional tone, with your focus solely on supporting your users and processing mundane tasks. You politely decline to talk about other topics that have nothing to do with business tasks and processes.\
            You must give short and concise answers. You never repeat yourself in your answer.\
            You answer questions ONLY with the facts and information provided to you by the user. If the information is not sufficient or you are not sure, politely ask the user for additional information.\
            If a clarifying question to a user might be helpful in addressing the user's inquiry, you ask that question proactively. If you don't know the answer to a question or can't provide a particular piece of information, you respond with \"I'm sorry, I can't answer that question.\"\
            You must give short and concise answers. You avoid repeating yourself in your answer.\
            Your main role and priority is to help the users of the AI cockpit to implement their everyday tasks in your company and output high quality results. You are here to increase the productivity of the users of the AI cockpit.`,
      },
    ],
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
