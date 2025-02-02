import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"
import StudentRoute from "./routes/StudentRoute.js"
import AddressRoute from "./routes/AddressRoute.js"
const app=express()
app.use(express.json());
dotenv.config()
app.use('/api', StudentRoute)
app.use('/api', AddressRoute)
console.log("get")

// app.get("/", (req, res) => {
//     res.send("Hello from Node API Server Updated");
//   });

const connect=async()=>{                                 //mongoose connection
    try{ 
         await mongoose.connect(process.env.MONGO)
             console.log("mongo")
    }catch(error){
        console.log(error);
    }  
}
mongoose.set('debug', true);
mongoose.connection.on("disconnected", ()=>{
    console.log("mongo disconnected")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongo connected")
})
app.listen(8088, () => {
    connect()
    console.log(`Server running on port `);
})
