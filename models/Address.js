import mongoose from "mongoose";

const AddressSchema=new mongoose.Schema({
    address: {
       type: String,
      required: true,
    },
    studentId: {
       type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
      required: true,
    },
    pincode:{
      type:String,
      ref:'Student.pincode'
    }
  })
  export default mongoose.model("Address",AddressSchema)