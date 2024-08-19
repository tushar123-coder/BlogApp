const jwt=require('jsonwebtoken')
const userModel=require('../model/user.model')
const jwt_secret=process.env.JWT_SECRET_KEY

const generateToken= async (userId)=>
{
  try {
    
    const user= await userModel.findById(userId);
    if(!user)
    {
        throw new error("You are not registered")
    }

    const token =await jwt.sign({userId:user._id,role:user.role},jwt_secret);
    return token;
  } catch (error) {
    console.error("Error genertion token",error);
    throw error;
  }
}
module.exports=generateToken;