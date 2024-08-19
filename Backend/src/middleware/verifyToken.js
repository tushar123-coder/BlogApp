const jwt=require('jsonwebtoken')
const jwt_secret=process.env.JWT_SECRET_KEY

const verifyToken =(req,res,next)=>
{
    try {
            const token= req.cookies.token;
        // const token= req.headers.authorization?.split(' ')[1];
        if(!token)
        {
            return res.status(401).send({message:"first Login"});
        }
        const decoded=jwt.verify(token,jwt_secret);
        if(!decoded.userId)
        {
            return res.status(402).send({message:"User is not presented"});
        }
        req.userId=decoded.userId;
        req.role=decoded.role;
        next()
    } catch (error) {
        console.error("Error verify token",error);
        res.status(401).send({message:"Invalid token"})
    }
}

module.exports=verifyToken