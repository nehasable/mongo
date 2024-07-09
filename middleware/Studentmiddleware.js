import express from "express"
import mongoose from "mongoose";
import Student from "../models/Student";
const app=express()

export const createStudent= async (req,res)=>{
    try{
 const newStudent= await Student.create(req.body)
 res.status(200).json(newStudent)
    }catch(error){
        console.log(error)
    }

}
