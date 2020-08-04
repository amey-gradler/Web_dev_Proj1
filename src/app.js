const express = require('express')
const news = require('./utils/news')
const path = require('path')
const hbs=require('hbs')
const live=require('./utils/live')
const app= express()

const homepage=path.join(__dirname,'../public')
const viewpage=path.join(__dirname,'../templates/views')


const port= process.nextTick.PORT || 3000;

app.use(express.static(homepage))
app.set('view engine','hbs')
app.set('views',viewpage)


app.get('',(req,res)=>{
    res.render('index')
})

app.get('/news', (req,res)=>{
    news((error,body)=>{
        if(error){
            return res.send({
                Error:error
            })
        }

        const news = body.articles
        
        res.send(
            news
            
        )
    })
})

app.get('/live',(req,res)=>{
    live((error,body)=>{
        if(error){
            return res.send({
                Error:error
            })
        }
        const score=body.matches
        res.send(score)
    })
})


app.listen(port, ()=>{
    console.log('server is up on port '+port);
    
})