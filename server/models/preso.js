import { conectarPreso } from "../db.js";
import mongoose from 'mongoose';

const PresoDB = await conectarPreso();

const presoSchema = new mongoose.Schema({
  IdPoderJudicial: String,
  nombre: String,
  dni: String,
  fecha_entrada: String,
});

export default PresoDB.model("Preso", presoSchema);
