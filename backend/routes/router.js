import express from "express";
import { getStudents } from "../controller/students.js";
import { postStudent } from "../controller/students.js";
import { updateCourse } from "../controller/students.js";

const router = express.Router();

router.get("/students", getStudents);
router.post("/students", postStudent);
router.patch("/students/:id/update", updateCourse);
export default router;
