const greet=document.getElementById("greet")
const btn=document.getElementById("btn")

btn.addEventListener("click",()=>{
    if(greet.style.display==="none"){
        greet.innerText="Welcome to event handling"
        greet.style.display="block"
    }else{
        greet.style.display="none"
    }
})