import mongoose from "mongoose";
import { MONGODB_URI_Preso, MONGODB_URI_PoderJudicial } from "./config.js";

export const conectarPreso = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = mongoose.createConnection(MONGODB_URI_Preso);
    console.log(`Preso conectado a MongoDB: ${conn.connection}`);
    return conn;
  } catch (error) {
    console.error(`Error al conectar con la base de datos del preso: ${error.message}`);
    process.exit(1);
  }
};

export const conectarPoderJudicial = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = mongoose.createConnection(MONGODB_URI_PoderJudicial);
    console.log(`Poder Judicial conectado a MongoDB: ${conn.connection}`);
    return conn;
  } catch (error) {
    console.error(`Error al conectar con la base de datos del Poder Judicial: ${error.message}`);
    process.exit(1);
  }
};
