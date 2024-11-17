const jwt=require("jsonwebtoken")
const secret="Dy8823"
function setuser(user)
{
    return jwt.sign({
      name:user.name,
      email:user.Email,
      role:user.role,
    },secret)
  
}
function getuser(token)
{
     if(!token)return null;
    return jwt.verify(token,secret)
}
module.exports={setuser,getuser}