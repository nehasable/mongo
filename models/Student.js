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
      
        type:String,
        required: true,
        unique: true   

    },
    dateofbirth:{
      type:Date,
      required: true,
      unique: true 
    }

  },

);

export default mongoose.model("Student",StudentSchema);