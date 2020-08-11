const mongoose=require('mongoose')
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,       
    },
    blog:{
        type:String,
        required:true,    
    }
})
const Blogs=mongoose.model('Blogs',blogSchema)
module.exports=Blogs