
const page=document.getElementById("page")
const btn=document.getElementById('btn')



btn.addEventListener("click",function(){
    if(page.textContent==="Home Page"){
        page.textContent="About"
    }
     else{
        page.textContent="Home Page"
     } 
})
const submit=document.getElementById("submit")
const inputElement=document.getElementById("input")

console.log("inpp..",inputElement)
console.log("submit..",submit)

submit.addEventListener("click",function(){
   const output= inputElement.value
   console.log("out",output)
})

