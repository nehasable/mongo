import express from "express"
import mongoose from "mongoose";
import Student from "../models/Student.js";
const router = express.Router();
import { createStudent, customStudent, deleteStudent, getStudents, getStudentsbyId, updateStudent } from "../middleware/Studentmiddleware.js";
const app=express()

router.post('/',createStudent)
console.log("hi")
router.get('/student',getStudents)
router.get('/student/:id',getStudentsbyId)
router.post('/student/all',customStudent)
router.delete('/student/:id', deleteStudent)
router.put('/student/:id', updateStudent)
export default router;