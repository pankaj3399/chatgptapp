import { Schema, model, Types } from 'mongoose';

const ChatSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: "User",
        required: [true, 'User required!']
    },
    title: {
        type: String,
        required: [true, 'Title required!']
    },
    messages: {
        type: [
            {
                role: {
                    type: String
                },
                content: {
                    type: String
                },
                createdContentAt: {
                    type: String
                },
            }
        ]
    },
}, {
    timestamps: true,
});

const Chat = model("Chat", ChatSchema);
export default Chat;