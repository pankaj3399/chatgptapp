import { Schema, model, Types } from "mongoose";

const promptSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name filed is required"],
    },
    category: {
      type: Types.ObjectId,
      ref: "Category",
      required: [true, "Category id is required"],
    },
    subCategory: {
      type: Types.ObjectId,
      ref: "SubCategory",
      required: [true, "Sub Category id is required"],
    },
    image: {
      type: Types.ObjectId,
      ref: "CardTemp",
      required: [true, "Image url is required"],
    },
    prompt: {
      type: String,
      required: [true, "prompt is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    model: {
      type: String,
      enum: {
        values: ["GPT-4", "UnternehmensGPT", "Llama 2", "DALL-e 2"],
        message: `Status value can not be {VALUE}, must be GPT-4/UnternehmensGPT/Llama 2/DALL-e 2`,
      },
    },
    type: {
      type: String,
      enum: {
        values: ["prompt", "charakter"],
        message: `Status value can not be {VALUE}, must be prompt/character`,
      },
    },
    user: {
      name: {
        type: String,
        required: [true, "User name is required"],
      },
      id: {
        type: Types.ObjectId,
        ref: "User",
        required: [true, "User id is required"],
      },
    },
    company: {
      type: Types.ObjectId,
      ref: "Company",
      required: [true, "Company required!"],
    },
    library: {
      type: String,
      enum: {
        values: ["master", "company"],
        message: `Library value can not be {VALUE}, must be master/company`,
      },
    },
  },
  { timestamps: true }
);

promptSchema.index({ name: "text", description: "text" });
const Prompt = model("Prompt", promptSchema);
export default Prompt;
