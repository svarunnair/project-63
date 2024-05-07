
const page=document.getElementById("page")
const btn=document.getElementById('btn')

console.log("object",page.textContent)

btn.addEventListener("click",function(){
    if(page.textContent==="Home Page"){
        page.textContent="About"
    }
     else{
        page.textContent="Home Page"
     }
        
    
    
})

