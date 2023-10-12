import { Schema, model, Types } from "mongoose";

const ChatSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: [true, "User required!"],
    },
    title: {
      type: String,
      required: [true, "Title required!"],
    },
    model: {
      type: String,
      enum: {
        values: ["GPT-4", "UnternehmensGPT", "Llama 2", "DALL-e 2"],
        message: `Status value can not be {VALUE}, must be GPT-4/UnternehmensGPT/Llama 2/DALL-e 2`,
      },
    },
    messages: {
      type: [
        {
          role: {
            type: String,
          },
          content: {
            type: String,
          },
          createdContentAt: {
            type: String,
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Chat = model("Chat", ChatSchema);
export default Chat;
