
import { config } from "dotenv";

config();

export const MONGODB_URI_Preso =
  process.env.MONGODB_URI_Preso || "mongodb://localhost:27017/PresoMongoDB";

export const MONGODB_URI_PoderJudicial =
  process.env.MONGODB_URI_PoderJudicial || "mongodb://localhost:27017/poderJudicialMongoDB";
