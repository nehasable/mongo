import express from "express"
import mongoose from "mongoose";
import Student from "../models/Student.js";
const router = express.Router();
import { createStudent, customStudent, getStudents, getStudentsbyId } from "../middleware/Studentmiddleware.js";
const app=express()

router.post('/',createStudent)
console.log("hi")
router.get('/student',getStudents)
router.get('/student/:id',getStudentsbyId)
router.post('/student/all',customStudent)
export default router;