import { con } from "../config/con_db.js";
// import { mysqlConnection } from "../config/con_db.js";

//getting the registrer infomation
 export const Profileicon =  async (req, res) => {
  const userID = req.params.userID;

  const sql = 'SELECT * FROM `profile_id` WHERE student_id = ?';
  con.query(sql,[userID], async (err,result)=>{
  if(err) throw err;
  console.log(result);
  res.json(result);
  });
};

 export const Courses = async (req,res) =>{
  
};