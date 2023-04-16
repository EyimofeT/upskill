import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from "cors";
import morgan from 'morgan';
import cookie from "cookie-parser";
import {userRouter} from "./routes/users/user.js";
import {authRouter} from "./routes/auth/auth.js"
import {DashboardRouter} from "./routes/dashboards.js";
import { courseRouter } from './routes/courses/courses.js';
const app = express();

//For getting data from the frontend as json format 
app.use(express.json());

//trying to make api request from front end
// Enable cors
var corsOptions = {
 origin: ['http://localhost:3000', 'https://elearning-sam.vercel.app/'],
 optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// app.use(cors());


// Logging middleware
app.use(morgan('combined'));

//all users routers
app.use("/api/v1",authRouter)
app.use("/api/v1", userRouter);
app.use("/api/v1",courseRouter)
// app.use("/api/v1/auth/dashboard", DashboardRouter);

app.use(cookie());

app.listen(process.env.PORT,()=> console.log(`SERVER STARTED on port ${process.env.PORT}`));

//to start the app run {npm start}