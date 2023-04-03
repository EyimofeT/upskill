import express from "express";
const router = express.Router();
router.use(express.json());
import {Profileicon} from "../controller/dashboard.js"

//getting the registrer infomation
router.get("/profileicon/:userID",Profileicon);

//router.get("/courses",Courses);

export { router as DashboardRouter };