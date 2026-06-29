import mongoose from "mongoose";

const PersonalSchema = new mongoose.Schema({

  nombre:{
    type:String,
    required:true
  },

  curp:String,

  rfc:String,

  telefono:String,

  correo:String,

  cargo:String,

  area:String,

  foto:String,

  estatus:{
    type:Boolean,
    default:true
  }

},
{
  timestamps:true
});

export default mongoose.models.Personal ||
mongoose.model(
  "Personal",
  PersonalSchema
);