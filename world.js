//var world=document.getElementById("digu")
var count=1;
function res(){
  //  if(count==1){
    foo1()
    //}
}
async function loadUserworld(){
    try{
        const url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=M9gsE0ftboJ2kfsQHnLg5n8YPaixrNrG"
         const response = await fetch(url);
        var data = await response.json();
   
   return data
    }
    catch(err){
        console.log(err)
    }
}

async function foo1(){
    
       //console.log(abc)
      var some_thing=await loadUserworld();
    for(var i=0;i<some_thing.results.length;i++){
     var card_head=document.createElement("div")
     card_head.setAttribute("class","card-header")   
     var card_body=document.createElement("div");
     card_body.setAttribute("class","card-body")
     card_body.setAttribute("id","man")
    // var image=document.createElement("image")
     //image.setAttribute("class","img-thumbnail")
     //card_body.appendChild(image)
     var h5=document.createElement("h5")
     h5.setAttribute("class","card-title")
     h5.innerHTML=some_thing.results[i].abstract
     var p=document.createElement("button")
     p.setAttribute("class","btn btn-primary")
     p.innerHTML="Continue reading...."
     card_body.appendChild(h5)
     card_body.appendChild(p)
     var div1=document.createElement("div")
     div1.setAttribute("class","card")
     div1.appendChild(card_body)
     div1.appendChild(card_head)
     document.body.appendChild(div1)
     }
     count--;
    }
    
 

