import express from "express";
const router = express.Router();
import { getDashboardData } from "../../controller/user.js";


router.use(express.json());

router.get("/user/dashboard",getDashboardData)


export { router as userRouter };