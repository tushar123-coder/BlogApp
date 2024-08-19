const mongoose=require('mongoose')

const blogSchema= new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:String,
    content:{
        type:Object,
        require:true
    },
    coverImg:String,
    category:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    },
    rating:Number,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const blog= mongoose.model("Blog",blogSchema);

module.exports=blog;