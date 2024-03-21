import mongoose from "mongoose";

const { Schema, model } = mongoose;

const topicShema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    uppercase: true,
    trim: true,
  },
  titulo: {
    type: String,
    required: [true, "El título es obligatorio"],
    uppercase: true,
    trim: true,
  },
  inicio: {
    type: String,
    required: [true, "La hora de inicio es obligatoria"],
  },
  img: {
    type: String,
  },
});

const Topicos = model("Topicos", topicShema);

export default Topicos;
