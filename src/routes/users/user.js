import express from "express";
const router = express.Router();
// import { Login, Registrer } from "../../controller/user.js";
// import {userRegister} from "../../middleware/userRegister.js";
// import {userLogin} from "../../middleware/userlogin.js";
router.use(express.json());

//getting the registrer infomation
// router.post("/register",userRegister,Registrer);

// router.post("/login",userLogin,Login);

export { router as userRouter };