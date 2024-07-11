const router = express.Router();
import express from "express"
import { createAdd } from "../middleware/Addressmiddleware";
const app=express()

router.post('/address',createAdd)

export default router;