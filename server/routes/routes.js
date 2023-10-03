import express from "express";
const router = express.Router();

import authRouter from "../app/routers/authRouter.js";
import categoryRouter from "../app/routers/categoryRouter.js";
import promptRouter from "../app/routers/promptRouter.js";
import subCategoryRouter from "../app/routers/subCategoryRouter.js";
import cardTempRouter from "../app/routers/cardTempRouter.js";
import chatRouter from "../app/routers/chatRouter.js";

const apiRoutes = [
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/category",
    route: categoryRouter,
  },
  {
    path: "/sub-category",
    route: subCategoryRouter,
  },
  {
    path: "/prompt",
    route: promptRouter,
  },
  {
    path: "/card-temp",
    route: cardTempRouter,
  },
  {
    path: "/chat",
    route: chatRouter,
  },
];

apiRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
