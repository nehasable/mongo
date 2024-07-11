import express from "express"
import mongoose from "mongoose";
import Student from "../models/Student.js";
const app=express()

export const createStudent= async (req,res)=>{
    try{
       
 const newStudent= await Student.create(req.body)
 res.status(200).json(newStudent)
    }catch(error){
        console.log(error)
    }

}
export const getStudents=async(req,res)=>{
    try{
        const name=req.body                        //value put in body

        const students=await Student.find(name)
        res.status(200).json(students)
    }catch(error){
        console.log(error)
    }
}
export const getStudentsbyId=async(req,res)=>{
    try{
        const {id}=req.params
        const student=await Student.findById(id)
        res.status(200).json(student)
    }catch(error){
       console.log(error) 
    }
}
export const customStudent=async(req,res)=>{
    try{
        console.log("work")
        const{ name,startDate,endDate}=req.body
        // console.log(startDate,endDate)
        // const reg=({$regex:(name)})}
        // let query={};
        // const query=await Student.find( {name:{ $regex: name, $options:"i"} } )                    //db.students.find({name:{$regex:/eh/}})
        // const query2=await Student.find({$gte:new Date(startDate),$lte:new Date(endDate)})
        // if(startDate && endDate){
        //     query.dateofbirth = { $gte: new Date(startDate), $lte: new Date(endDate) };
        // }
        const query={$and:[ { name: { $regex: name, $options: "i" } },{dateofbirth:{ $gte: new Date(startDate), $lte: new Date(endDate) }}]}
        console.log(new Date(startDate),new Date(endDate))
        const studentquery=await Student.find(query)
        res.status(200).json(studentquery)
        
    }catch(error){
        console.log(error) 
    }
}

export const deleteStudent=async(req,res)=>{
    try{
        const {id}=req.params
        const studentDelete=await Student.findByIdAndDelete(id)
        res.status(200).json(studentDelete)
    }catch(error){
       console.log(error) 
    }
}
// export const updateStudent= async (req, res) => {
//     try {
//       const updatedStudent = await Student.findByIdAndUpdate(
//         req.params.id,                                                
//         { $set: req.body },                
//         { new: true }                                                //display change as new schema
//       );
//       res.status(200).json(updatedStudent);
//     } catch (error) {
//         console.log(error) 
//     }
//   };
export const updateStudent= async (req, res) => {
    try {
       const allStudents=await Student.find() 
       const bulk=
       allStudents.map((student)=>({
        updateOne:{
            filter:{_id: student._id},
            update:{ $set: req.body }
        }
       }))
      const updatedStudent = await Student.bulkWrite(bulk);
      res.status(200).json(updatedStudent);
    } catch (error) {
        console.log(error) 
    }
  };


