import { Schema, model } from "mongoose";

const cardTempSchema = new Schema(
  {
    url: {
      type: String,
      required: [true, "url image is required"],
    },
  },
  { timestamps: true }
);

const CardTemp = model("CardTemp", cardTempSchema);
export default CardTemp;
