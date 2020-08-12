const express=require('express')
const router = new express.Router()
const Blogs= require('../models/blogs')
// CREATING A BLOG
router.post('/blogs',async(req,res)=>{
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
// READING ALL BLOGS
router.get('/blogs',(req,res)=>{
    Blogs.find().then((blogs)=>{
        res.status(200).send(blogs)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})
// READING SPECIFIC BLOG
router.get('/blogs/:id',(req,res)=>{
    const _id=req.params.id
    Blogs.findById(_id).then((blog)=>{
        if(!blog)
        {
            return res.status(404).send("TASK NOT FOUND!!")
        }
        res.send(blog)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})
router.patch('/blogs/:id',async(req,res)=>{
    const updates=Object.keys(req.body)
    const allowedUpdate=['title','blog']
    const isValidUpdate=updates.every((update)=>allowedUpdate.includes(update))
    if(!isValidUpdate){return res.status(404).send("NOT ALLOWED")}
    try
    {
        const blog=await Blogs.findByIdAndUpdate(req.params.id,req.body,{new:true,runvalidator:true})
        if(!blog){return res.status(404).send("BLOG NOT FOUND")}
        res.send(blog)
    }catch(e){
        res.status(400).send(e)
    }
})
// DELETE THE BLOG  
router.delete('/blogs/:id',async(req,res)=>{
    try{
        const blog = await Blogs.findByIdAndDelete(req.params.id)
        if(!blog){return res.status(404).send("BLOG NOT FOUND!!")}
        res.send(blog)
    }catch(e){
        res.status(500).send()
    }
})



module.exports=router