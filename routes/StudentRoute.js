import express from "express"
import mongoose from "mongoose";
import Student from "../models/Student";
const router = express.Router();
import { createStudent } from "../middleware/Studentmiddleware";
const app=express()

router.post('/createe',createStudent)
console.log("hi")

export default router;