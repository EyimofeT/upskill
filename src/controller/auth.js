import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { con } from "../config/con_db.js";
import dotenv from 'dotenv'
dotenv.config()

//getting the registrer infomation
 export const Registrer =  async (req, res) => {
  const {first_name,last_name,email,student_id,study_course_id,level,group_id,merit_bandage,password,role} = req.body;

  const sql = 'SELECT * FROM student_t WHERE email = ?';
  //check if the user exits if not insert in to table
  con.query(sql, [email], async (err, result) => {
    if (err) throw err;

    if (result[0]) {
      res.json({ message: "account with email exits" });
    }else{
    const hashpassword = await bcrypt.hash(password, 10);
    const student_id = first_name +"_" + (first_name.length+last_name.length);
    // if(role == "admin"){
    //   const role = "admin";
    // }else{
    //  const role = "user";
    // }
    let student_role="user"
    if(role){
      student_role=role
    }
    con.query('INSERT INTO `student_t`(`first_name`, `last_name`, `email`, `student_id`,`study_course_id`,`level`, `password` , `group_id`,`merit_bandage`,`role`) VALUES (?,?,?,?,?,?,?,?,?,?)',[first_name.toLowerCase(),last_name.toLowerCase(),email.toLowerCase(),student_id.toLowerCase(),study_course_id.toLowerCase(),level.toLowerCase(),hashpassword,'0','novice',student_role.toLowerCase() ], (error,results) =>{
  if(error) throw res.json(error);
  return res.json({"status":"success",message:"Account Created"});
    });
    }
  });
};

 export const Login = async(req,res) =>{
  const {email,password} = req.body;

   const sql = 'SELECT * FROM student_t WHERE email = ?';
  con.query(sql,[email], async (err,result) =>{
    if(err) throw err;

  if (!result[0]) {
    // res.json({message: "Email Not Found"});
    res.json({status: "failed",message: "Invalid Credentials"});
  }else{
    const passwordH = await bcrypt.compare(password,result[0].password);
   if (!passwordH) {
    res.json({status: "failed",message: "Invalid Credentials"});
   }else{
    //token for verifying the user
    const sql = 'update student_t set date_last_login=CURRENT_TIMESTAMP ';
            con.query(sql, async (err,result) =>{
                // console.log("Update Successful")
            })

    const token = jwt.sign({id: result[0].student_id},process.env.JWT_SECRET_KEY,{
      expiresIn: 86400,
    });
    let userdata={
       
        "first_name": result[0].first_name,
        "last_name":  result[0].last_name,
        "email":  result[0].email,
        "student_id": result[0].student_id,
        "study_course_id":  result[0].study_course_id,
        "level":  result[0].level,
        "group_id":  result[0].group_id,
        "merit_bandage":  result[0].merit_bandage,
        "date_created":  result[0].date_created,
        "date_last_modified":  result[0].date_last_modified,
        "date_last_login":  result[0].date_last_login
    }
    res.json({status:"success",token , user_data:userdata});
   }
  }
  });
};

export const getUser = (req, res) => {
  let token = req.headers.authorization;
 
  if (!token) {
      return res.status(400).json({ message: "No Token Found!" });
  }
  token=token.split(' ')[1];
  // return res.status(200).json({ message: token });
  
  try {
      const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const { id } = data;
  
      
      const sql = 'SELECT * FROM student_t WHERE student_id = ?';
      con.query(sql,[id], async (err,result) =>{
        let userdata={
          "first_name": result[0].first_name,
          "last_name":  result[0].last_name,
          "email":  result[0].email,
          "student_id": result[0].student_id,
          "study_course_id":  result[0].study_course_id,
          "level":  result[0].level,
          "role": result[0].role,
          "group_id":  result[0].group_id,
          "merit_bandage":  result[0].merit_bandage,
          "date_created":  result[0].date_created,
          "date_last_modified":  result[0].date_last_modified,
          "date_last_login":  result[0].date_last_login
      }
        return res.status(200).json({ status:200, message:"success",userdata:userdata });
      })
  }
  catch {
      return res.status(400).json({ message: "Invalid Token Found!" });
  }
}

export const resetPassword = (req, res) => {
  let token = req.headers.authorization;
 
  if (!token) {
      return res.status(400).json({ message: "No Token Found!" });
  }
  token=token.split(' ')[1];
  const { oldpassword, newpassword} = req.body
  if (!oldpassword){
    return res.status(400).json({ message: "Input Old Password!" });
  }
  if (!newpassword){
    return res.status(400).json({ message: "Input New Password!" });
  }
  // return res.status(200).json({ message: token });
  
  try {
      const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const { id } = data;
      
  
      
      const sql = 'SELECT * FROM student_t WHERE student_id = ?';
      con.query(sql,[id], async (err,result) =>{
        let userdata={
          "first_name": result[0].first_name,
          "last_name":  result[0].last_name,
          "email":  result[0].email,
          "student_id": result[0].student_id,
          "study_course_id":  result[0].study_course_id,
          "level":  result[0].level,
          "role": result[0].role,
          "group_id":  result[0].group_id,
          "merit_bandage":  result[0].merit_bandage,
          "date_created":  result[0].date_created,
          "date_last_modified":  result[0].date_last_modified,
          "date_last_login":  result[0].date_last_login
      }
        // return res.status(200).json({ status:200, message:"success",userdata:userdata });
        const passwordH = await bcrypt.compare(oldpassword,result[0].password);
        // console.log(await bcrypt.hash(newpassword, 10))
        if(passwordH){
          const sql = 'update student_t set password=? where student_id=?';
            con.query(sql,[await bcrypt.hash(newpassword, 10),id], async (err,result) =>{
              return res.status(200).json({ message: "Password Changed Successfully!" });
            })
        }
        else{
          //return wring password
          return res.status(400).json({ message: "Incorrect Password" });
        }
      })
  }
  catch {
      return res.status(400).json({ message: "Invalid Token Found!" });
  }
}



