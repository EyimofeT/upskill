import jwt from "jsonwebtoken";
import { con } from "../config/con_db.js";
import dotenv from 'dotenv'
dotenv.config()


export const getDashboardData = (req, res) => {
    let token = req.headers.authorization;
   
    if (!token) {
        return res.status(400).json({ message: "No Token Found!" });
    }
    token=token.split(' ')[1];
    let no_of_courses,registered_courses;
    try {
        
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const { id } = data;
        
        const sql = 'select count(*) as total from enrolled_course_t where enrolled_course_t.student_id= ?';
        const sql2 = 'select enrolled_course_t.course_id,course_t.course_id,course_t.name,course_t.short_code,course_t.course_group,lecturer_t.lecturer_id,lecturer_t.first_name as lecturer_first_name,lecturer_t.last_name as lecturer_last_name, lecturer_t.department as lecturer_department from enrolled_course_t join course_t on enrolled_course_t.course_id=course_t.course_id join lecturer_t on course_t.lecturer_id=lecturer_t.lecturer_id where enrolled_course_t.student_id=?';
       

        con.query(sql,[id],async (err,result) =>{  
        no_of_courses=await result[0]['total']
            con.query(sql2,[id], async (err,result) =>{  
                registered_courses=await result
                    return res.status(200).json({ status:200, message:"success",no_of_courses_registered:no_of_courses, registered_course_data:registered_courses});
                });
      
        });

    }
    catch {
        return res.status(400).json({ message: "Invalid Token Found!" });
    }
  }

