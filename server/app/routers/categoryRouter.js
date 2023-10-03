import express from "express";
import createCategory from "../controllers/categories/createCategory.js";
import GetCategories from "../controllers/categories/GetCategories.js";
import AutoCreateAllCategory from "../controllers/categories/AutoCreateAllCategory.js";
const router = express.Router();

//routes
router.get("/", GetCategories);
router.post("/", createCategory);
router.post("/auto-create", AutoCreateAllCategory);

export default router;
