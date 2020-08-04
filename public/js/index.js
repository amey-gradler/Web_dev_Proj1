var x='';


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