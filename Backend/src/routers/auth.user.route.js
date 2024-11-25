 const express=require('express');
const user = require('../model/user.model');
const bcrypt=require('bcrypt');
 const router=express.Router();
 const generateToken=require('../middleware/generateToken')

// reagister a new user
router.post('/register',(req,res)=>{
    try {
         const {email,username,password}=req.body;
           
            bcrypt.hash(password,10,async (err,hash)=>
            {
                const newUser=await new user({
                    username,
                    email,
                    password:hash
                })
                await newUser.save();
                res.status(201).send({message:"User registered successfully",user:newUser});
            })
    } catch (error) {
        console.error("Failed to register",error)
        res.status(200).json({message:'Registration failed!'});
    }
})

// login a user
router.post('/login',async (req,res)=>
{
    try {
        const{email,password}=req.body;
    const findUser=await user.findOne({email});
    const isMatch= await bcrypt.compare(password,findUser.password);
    if(!findUser|| !isMatch)
    {
        return res.status(200).send("Invalid Email and Password");
    }
    
    // generate token
    const token =await generateToken(findUser.id);
    res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        sameSite:true
    });
    res.status(200).send({message:"Login successfully",token,user:{
        _id: findUser._id,
        email: findUser.email,
        username:findUser.username,
        role:findUser.role
    }})
    } catch (error) {
        res.status(200).send({message:'Login failed!'});
    }

})

// logout user
router.post('/logout',async (req,res)=>
{
    try {
        res.clearCookie("token");
        res.status(200).send({message:"Logged out successfully"});
    } catch (error) {
        console.error("Failed to log out",error);
        res.status(401).send({message:"Logout failed!"})
    }
})

// get all users
router.get('/getusers',async (req,res)=>
{
    try {
        const users=await user.find({},'id email role');
    res.status(200).send(users);
    } catch (error) {
        console.error("Error fetching users",error);
        res.status(400).json({message:'Failed to fetch users!'})
    }
})

// get one userbyId
router.get('/getuser/:id',async (req,res)=>
    {
        try {
            const User=await user.findById(req.params.id);
        res.status(200).send(User);
        } catch (error) {
            console.error("Error fetching users",error);
            res.status(404).json({message:'Failed to fetch users!'})
        }
    })

// delete a user

router.delete('/delete/:id',async (req,res)=>
{
    try {
        const userId=req.params.id;
        const deletedUser= await user.findByIdAndDelete(userId);
   if(deletedUser===null)
   {
    return res.status(401).send({message:"User not found"});
   }
    res.status(200).send({message:"User deleted successfully"});
    } catch (error) {
        res.status(401).send({message:"error in deletion"})
    }

})

// update a user role

router.put('/user/:id',async (req,res)=>
{
    try {
        const {id}=req.params;
    const {role}=req.body;
    const User=await user.findByIdAndUpdate(id,{role},{new:true});

    if(!User)
    {
        return res.status(200).send({message:"User not found"});
    }

    res.status(200).send({message:"User role is updated successfully",User});
    
    } catch (error) {
        console.error("Error while updating role",error);
        res.status(201).send({message:"Error while updating role"})
    }
})
 module.exports=router;