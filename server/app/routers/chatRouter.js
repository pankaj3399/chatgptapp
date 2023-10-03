import express from "express";
import CreateChat from "../controllers/chat/CreateChat.js";
import auth from "../middleware/auth.js";
import GetChatsByAuthId from "../controllers/chat/GetChatsByAuthId.js";
const router = express.Router();

//routes
router.get("/authenticated-id", auth(), GetChatsByAuthId);
router.post("/", auth(), CreateChat);

export default router;
