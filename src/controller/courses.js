import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { con } from "../config/con_db.js";
import dotenv from 'dotenv'
dotenv.config()

//getting all the courses available
export const getCourse = (req, res) => {
    let token = req.headers.authorization;
   
    if (!token) {
        return res.status(400).json({ message: "No Token Found!" });
    }
    token=token.split(' ')[1];
    // return res.status(200).json({ message: token });
    
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const sql = 'SELECT * FROM course_t ';
        con.query(sql, async (err,result) =>{
            let counter=0
            while(counter<result.length){
                // console.log(result[counter].course_id)
                // console.log(counter)
                result[counter].time=JSON.parse(result[counter].time)
                counter++
            }
          return res.status(200).json({ status:200, message:"success",courses:result });
        })
    }
    catch {
        return res.status(400).json({ message: "Invalid Token Found!" });
    }
  }

export const getCourseById = (req, res) => {
    let token = req.headers.authorization;
    
    if (!token) {
        return res.status(400).json({ message: "No Token Found!" });
    }
    if(!req.body.course_id){
        return res.status(400).json({ message: "No Course ID Found!" });
    }
    token=token.split(' ')[1];
    // return res.status(200).json({ message: token });
    
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const { id } = data;
        const course_id=req.body.course_id

        const sql = 'SELECT * FROM course_t where course_id=? ';
        con.query(sql,[course_id], async (err,result) =>{
            
        result[0].time=JSON.parse(result[0].time)
                console.log(result)
          return res.status(200).json({ status:200, message:"success",course:result });
        })
    }
    catch {
        return res.status(400).json({ message: "Invalid Token Found!" });
    }
  }

export const register = (req, res) => {
let token = req.headers.authorization;

if (!token) {
    return res.status(400).json({ message: "No Token Found!" });
}
if(!req.body.course_id){
    return res.status(400).json({ message: "No Course ID Found!" });
}
token=token.split(' ')[1];
// return res.status(200).json({ message: token });

try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const { id } = data;
    const course_id=req.body.course_id

    const query = 'SELECT id FROM enrolled_course_t where course_id=? and student_id=?';
    con.query(query,[course_id,id],(err,result) =>{
        // console.log(err)
        if(result.length>0){
        res.status(400).json({ status:400, message:"Already Registered " });
        return;
        }
        else{
            const sql = 'SELECT * FROM course_t where course_id=? ';
            con.query(sql,[course_id], async (err,result) =>{
                if(result.length==0){
                    return res.status(400).json({ status:400, message:"Course Not Found!" });
                }
               con.query('INSERT INTO `enrolled_course_t`(`student_id`, `course_id`) VALUES (?,?)',[ id,result[0].course_id], (error,results) =>{
                    if(error) throw res.json(error);
                    return res.json({"status":"success",message:"Enrolled Successfully"});
                      });
            })
        }
    })

   
}
catch {
    return res.status(400).json({ message: "Invalid Token Found!" });
}
}

export const getRegisteredCourse = (req, res) => {
    let token = req.headers.authorization;
    
    if (!token) {
        return res.status(400).json({ message: "No Token Found!" });
    }
   
    token=token.split(' ')[1];

    
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const { id } = data;
        // const course_id=req.body.course_id
    
       
        con.query('select student_t.student_id,enrolled_course_t.student_id,course_t.*,lecturer_t.first_name as lecturer_first_name,lecturer_t.last_name as lecturer_last_name from enrolled_course_t join student_t on enrolled_course_t.student_id=student_t.student_id join course_t on enrolled_course_t.course_id=course_t.course_id join lecturer_t on course_t.lecturer_id=lecturer_t.lecturer_id where enrolled_course_t.student_id=? ',[ id], (error,results) =>{
            if(error) throw res.json(error);
            let counter=0
            while(counter<results.length){
                // console.log(result[counter].course_id)
                // console.log(counter)
                results[counter].time=JSON.parse(results[counter].time)
                counter++
            }
            return res.json({"status":"success",message:"Courses Fetched Successfully",courses:results});
              });
    }
    catch {
        return res.status(400).json({ message: "Invalid Token Found!" });
    }
    }