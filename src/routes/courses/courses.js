import express from "express";
const router = express.Router();
import {
  getCourse,
  getCourseById,
  register,
  getRegisteredCourse,
} from "../../controller/courses.js";

router.use(express.json());

//getting the registrer infomation
router.get("/courses", getCourse);
router.get("/courses/view/:id", getCourseById);
router.post("/courses/register/:id", register);
router.get("/courses/registered", getRegisteredCourse);

export { router as courseRouter };
