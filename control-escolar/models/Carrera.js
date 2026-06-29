import mongoose from "mongoose";

const CarreraSchema =
new mongoose.Schema({

  nombreCarrera:{
    type:String,
    required:true
  },

  estatus:{
    type:Boolean,
    default:true
  }

});

export default
mongoose.models.Carrera ||
mongoose.model(
"Carrera",
CarreraSchema
);