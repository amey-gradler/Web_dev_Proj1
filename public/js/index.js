var x='';
var y='';

fetch('/news').then((res) => {
    res.json().then((data) => {
        data.map((single) => {
            x+='<div class="col-md-4">'
            x+=' <div class="card mb-4 box-shadow" style="height: 400px;">'
            x+=' <a href='+single.url+'><img class="card-img-top"  alt="News" style="height: 225px; width: 100%; display: block;" src='+ single.urlToImage +'<data-holder-rendered="true">'
            x+='<div class="card-body">'
            x+='<h4 id="heading-1"><span id="title">'+single.title+'</span></h4> </a>'
            x+='<p class="card-text"><span id="desc">'+single.title+'</span></p>'
            x+='<div class="d-flex justify-content-between align-items-center">'
            x+='</div>'
            x+='</div>'
            x+='</div> '
            x+='</div>'
            document.getElementById('imp').innerHTML=x;
        })
    })
})
fetch('/live').then((res)=>{
    res,json().then((data)=>{
        data.map((single)=>{
            y+='<div class="card">'
            y+='<div class="card">'
            y+='<div class="card-body" height="50px">'
            y+='<h5 class="card-title">'+'</h5>'
            y+='<div class="box">'
            y+='<img src=" " alt="COUNTRY NAME" height="40px" width="40px">'+single.team-1    
            y+='<h4 id="margin">'+single.type+'</h4>'
            y+='</div>'
            y+='<div class="box">'
            y+='<img src=" " alt="COUNTRY NAME" height="40px" width="40px">'+single.team-2    
            y+='<h4 id="margin">'+single.matchStarted+'</h4>'
            y+='</div>' 
            y+='</div>' 
            y+='</div>'  
        })
    })
})