const isAdmin=(req,res,next)=>
{

    if(req.role!=="admin")
    {
        return res.status(404).send({success:false,message:"You are not allowed to perform this action. Please try to login as an admin"});
    }
    next()
}

module.exports=isAdmin;