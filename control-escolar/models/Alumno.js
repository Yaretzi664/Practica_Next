import mongoose from "mongoose";

const AlumnoSchema = new mongoose.Schema({

  matricula:{
    type:String,
    required:true
  },

  nombre:{
    type:String,
    required:true
  },

  curp:String,

  telefono:String,

  email:String,

  carrera:String,

  foto:{
    type:String,
    default:""
  },

  estatus:{
    type:Boolean,
    default:true
  }

});

export default mongoose.models.Alumno ||
mongoose.model(
  "Alumno",
  AlumnoSchema
);