const express = require('express')
const news = require('./utils/news')
const app= express()

const port= process.nextTick.PORT || 3000;



app.get('/news', (req,res)=>{
    news((error,body)=>{
        if(error){
            return res.send({
                Error:error
            })
        }

        const news = body.articles
        
        res.send(news)
    })
})



app.listen(port, ()=>{
    console.log('server is up on port '+port);
    
})