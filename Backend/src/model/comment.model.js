const mongoose=require('mongoose');

const commentSchema=new mongoose.Schema(
    {
comment:{
    type:String,
    required:true
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    required:true
},
postId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'blog',
    required:true
},
createdAt:{
    type:Date,
    default:Date.now
}
    }
)

const comment=mongoose.model("comment",commentSchema);

module.exports=comment;