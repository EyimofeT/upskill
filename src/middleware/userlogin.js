export const userLogin = async (req,res,next)=>{
  const {email,password} = req.body;

  if (email !== "") {
  if (password !== "") {
  next();
  }else{
    return res.json({message:"password can't be empty"});
  }
  }else{
    return res.json({message:"email can't be empty"});
  }
}