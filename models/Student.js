import mongoose from "mongoose";
const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      
    },
    mobileno:{
      type: Number,
      required: true,
    },
 
    email:{
      
        type:String,
        required: true,
        unique: true   

    },
    dateofbirth:{
      type:Date,
      required: true,
       
    },
    pincode:{
      type:String,
        required: true,
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address',
      required: true,
    },
  }

);

export default mongoose.model("Student",StudentSchema);

