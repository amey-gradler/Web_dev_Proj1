const request =require('request')

const LiveScore=(callback)=>{
    const url ='https://cricapi.com/api/matches?apikey=xA24xrrbSKVWG56OtyT9c2IFARU2'
    request({url,json:true},(error,response,body)=>{
        if(error)
        {
            callback("Unable to collect Live Score",undefined)
        }
        else{
            callback(undefined,body)
        }
    })
}
module.exports=LiveScore
