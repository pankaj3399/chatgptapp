import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  OPEN_AI_MODEL: process.env.OPEN_AI_MODEL,
  OPEN_AI_ENDPOINT: process.env.OPEN_AI_ENDPOINT,
  OPEN_AI_DEPLOYMENT_NAME: process.env.OPEN_AI_DEPLOYMENT_NAME,
  MONGO_CONNECTION: process.env.MONGO_CONNECTION,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  TOKEN_SECRET_EXP: process.env.TOKEN_SECRET_EXP,
};
