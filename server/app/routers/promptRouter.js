import express from "express";
import createPrompt from "../controllers/prompt/createPrompt.js";
import GetPromptByUserId from "../controllers/prompt/GetPromptByUserId.js";
import auth from "../middleware/auth.js";
import GetPrompts from "../controllers/prompt/GetPrompts.js";
const router = express.Router();

//routes
router.get("/", auth(), GetPrompts);
router.get("/by-auth-user", auth(), GetPromptByUserId);
router.post("/", auth(), createPrompt);

export default router;
