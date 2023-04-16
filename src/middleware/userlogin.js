export const userLogin = async (req,res,next)=>{
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.set('Access-Control-Expose-Headers', 'Content-Length, X-JSON');
  res.set('Access-Control-Max-Age', '10');

  const {email,password} = req.body;

  if(!email){
    return res.status(400).json({message:"email required"});
  }
  if(!password){
    return res.status(400).json({message:"password required"});
  }

  if (email !== "") {
  if (password !== "") {
  next();
  }else{
    return res.status(400).json({message:"password can't be empty"});
  }
  }else{
    return res.status(400).json({message:"email can't be empty"});
  }
}