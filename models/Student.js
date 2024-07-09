import mongoose from "mongoose";
const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    mobileno:{
      type: Number,
      required: true,
    },
    address:{
        type: String,
        required: true,
        unique: true,
        upsert:true 
    },
    email:{
       from:{ type:String,
        required: true,
        unique: true,
       },
       to:{
        type:String,
        required: true,
        unique: true,
       },
       body:{
        type:String,
        required: true,
        unique: true,
       }

    }
  },

);

export default mongoose.model("Student",StudentSchema);