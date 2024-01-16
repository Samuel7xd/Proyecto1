import { conectarPoderJudicial } from "../db.js";
import mongoose from 'mongoose';

const PoderJudicialDB = await conectarPoderJudicial();

const PoderJudicialSchema = new mongoose.Schema({
  condena: String,
  periodo: String,
});

export default PoderJudicialDB.model("PoderJudicial", PoderJudicialSchema);
