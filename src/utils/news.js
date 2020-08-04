const request = require('request')

const news = (callback)=>{
    const url = "https://newsapi.org/v2/top-headlines?category=sports&apiKey=b11aaab7b6284d2a91d39f7d61a8d335&q=cricket"

    request({url,json:true}, (error,response,body)=>{
        if(error){
            
            // console.log("Unable to connect to servies");
            callback("Unable to connect to Services",undefined)
        }
        else{
            callback(undefined,body);
            // console.log(body);
        }
    })
}

module.exports=news