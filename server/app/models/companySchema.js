import { Schema, model } from "mongoose";

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name field is required"],
    },
    address: {
      type: String,
      required: [true, "Address field is required"],
    },
  },
  { timestamps: true }
);

const Company = model("Company", companySchema);
export default Company;
