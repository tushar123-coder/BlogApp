const express=require('express')
const comment =require('../model/comment.model')
const router=express.Router()

// create a comment
router.post('/create',async(req,res)=>
{
try {
    const newComment= new comment(req.body);
    await  newComment.save();
    res.status(200).send({message:"Comment created successfully",comment: newComment})
} catch (error) {
    console.error("An error occuring while posting new comment",error);
    res.status(404).send({message:"An error occured while posting new comment"})
}
})


// get all comments count

router.get("/total-comments",async(req,res)=>
{
    try {
        
        const totalcomment=await comment.countDocuments({});
        res.status(200).send({message:"Total comments count",totalcomment})
    } catch (error) {
        console.error("An error occuring while getting comment count",error);
        res.status(404).send({message:"An error occured while getting comment count"})
    }
})

module.exports=router