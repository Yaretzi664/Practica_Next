import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({

  nombre:{
    type:String,
    required:true
  },

  correo:{
    type:String,
    required:true,
    unique:true
  },

  password:{
    type:String,
    required:true
  },

  rol:{
    type:String,
    enum:[
      "Administrador",
      "Director",
      "Secretaria",
      "Docente"
    ],
    default:"Docente"
  }

},{
  timestamps:true
});

export default mongoose.models.Usuario ||
mongoose.model(
  "Usuario",
  UsuarioSchema
);