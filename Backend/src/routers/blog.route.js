const express=require('express');
const blog = require('../model/blog.model');
const Comment = require('../model/comment.model');
const verifyToken=require('../middleware/verifyToken')
const isAdmin=require('../middleware/isAdmin')
const router=express.Router();


// create a blog post
router.post('/create-post',verifyToken,isAdmin,async (req,res)=>
    {
        try {
            const newPost= new blog({...req.body,author:req.userId});
            await newPost.save();
            res.status(200).send(newPost);
    } catch (err) {
        console.log("Error",err);
     res.status(500).send({message:"Internal server Error"})   
    }
})

// Get all post
router.get('/', async (req,res)=>
{
    try {
        
        const {search,category,location}=req.query;
       let query={};
       if(search)
       {
        query={
            ...query,
            $or:[
                {title:{$regex:search,$options:'i'}},
                {content:{$regex:search,$options:'i'}}
            ]
        }
       }

       if(category)
       {
        query={
            ...query,
            category
        }
       }

       if(location)
       {
        query={
            ...query,
            location
        }
       }
        const posts=await blog.find(query).populate('author','email').sort({createdAt:-1});
        res.status(201).send(posts);
    } catch (error) {
        console.log("Error",error);
        res.status(500).send({message:"Internal server Error"})  
    }
})

// get single blog by id 
router.get('/:id',async (req,res)=>
{
    try {

        const post=await blog.findById(req.params.id);  
        if(!post)
        {
            return res.status(404).send("Post is not found");
        }

        // get comment 
        const comments=await Comment.find({postId:req.params.id}).populate("user","username email")
       res.status(200).send({post,comments})
    } catch (err) {
        console.log("Error",err);
     res.status(500).send({message:"Internal server Error"})   
    }
})

// update a blog

router.patch('/update-post/:id',verifyToken,isAdmin,async (req,res)=>
{
    try {
        const updatedPost=await blog.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        if(!updatedPost)
        {
            res.status(405).send({message:"Post not found"});
        }

        res.status(201).send({message:"Post updated successfully",
            post:updatedPost
        });

    } catch (err) {
        console.log("Error",err);
     res.status(500).send({message:"error post updated"})
    }
})


// delete a blog
router.delete("/:id",verifyToken,isAdmin,async (req,res)=>
{
    try {
        const post= await blog.findByIdAndDelete(req.params.id);
         
         if(!post)
         {
            return res.status(404).send("Post is not found");
         }
         await Comment.deleteMany({postId:req.params.id})
         res.status(200).send({message:"Post deleted successfully"})
    } catch (err) {
        res.status(401).send({message:" Error post deleted"})
    }
})

// related blogs
router.get('/related/:id',async (req,res)=>
{
   try {
    const {id}=req.params;
    if(!id)
    {
        return res.status(400).send({message:"Post id is required"});
    }


    const Blog=await blog.findById(id);
    if(!Blog)
    {
        return res.status(404).send({message:"Post is not found"});
    }

    const titleRegex=new RegExp(Blog.title.split(' ').join('|'),'i');

    const relatedquery={
        _id:{$ne:id},//excluded the current blog by id
        title:{$regex:titleRegex}
    }
    const relatedPost=await blog.find(relatedquery);
    res.status(200).send(relatedPost);
   } catch (err) {
    console.log("Error",err);
    res.status(500).send({message:"error fetching related post"})
   }
})
module.exports=router