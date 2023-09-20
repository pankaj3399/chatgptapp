import { Schema, Types, model } from 'mongoose';

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Category name is required']
    },
    subCategories: [
        {
            type: Types.ObjectId,
            ref: "SubCategory",
        },
    ],
}, { timestamps: true });

const Category = model("Category", categorySchema);
export default Category;