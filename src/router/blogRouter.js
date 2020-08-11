const express=require('express')
const router = new express.Router()
const Blogs= require('../models/blogs')
router.get('/blogs',async(req,res)=>{
    try{
        const blog1=new Blogs({
            title:req.body.title,
            blog:req.body.blog
        })
        const blog2=await blog1.save()
        res.send(blog2)
    }catch(error){
        res.send(error)
    }
})
module.exports=router