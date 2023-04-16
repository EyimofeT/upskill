export const userRegister = async (req,res,next) =>{
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.set('Access-Control-Expose-Headers', 'Content-Length, X-JSON');
  res.set('Access-Control-Max-Age', '10');
  
  const {first_name,last_name,email,password} = req.body;
  console.log("resp:", req.body);

  if(!password){
    return res.status(400).json({message:"Password Field Required"});
  }

  if (first_name !== "") {
    if (last_name !== "") {
      if (email !== "") {
    if (password !== "") {
    if (password.length > 5 && password.length < 15) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      const ptext = email.indexOf("@student.babcock.edu.ng");
      if (ptext !== -1) {
        return next();
      }else{
    return res.status(400).json({message:"Email must be a Babcock mail"});
  }
    }else{
    return res.status(400).json({message:"Invalid Email"});
  }
  }else{
    return res.status(400).json({message:"password password must be more than 5 and less than 15"});
  }
  }else{
    return res.status(400).json({message:"password can't be empty"});
  }
  }else{
    return res.status(400).json({message:"email can't be empty"});
  }
  }else{
    return res.status(400).json({message:"Last Name can't be empty"});
  }
  }else{
    return res.status(400).json({message:"First Name can't be empty"});
  }
}
