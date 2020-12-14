async function loadUser(){
    try{
        const url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=M9gsE0ftboJ2kfsQHnLg5n8YPaixrNrG"
         const response = await fetch(url);
        var data = await response.json();
        
    }
    catch(err){
        console.log=(err)
    }
} 
loadUser()
 
