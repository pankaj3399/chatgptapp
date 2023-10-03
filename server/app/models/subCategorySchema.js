import { Schema, model } from "mongoose";

const subCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Sub Category name is required"],
    },
  },
  { timestamps: true }
);

const SubCategory = model("SubCategory", subCategorySchema);
export default SubCategory;
