const mongoose=require('mongoose')
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:10       
    },
    blog:{
        type:String,
        minlength:100,
        required:true,    
    }
})
const Blogs=mongoose.model('Blogs',blogSchema)
module.exports=Blogs