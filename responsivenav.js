let hambuger = document.querySelector(".hambuger")
let nav = document.querySelector(".navv")
let link = document.querySelector(".links")
hambuger.addEventListener("click",()=>{
    hambuger.classList.toggle("active")
    nav.classList.toggle("active")
})
link.forEach((n)=>{
n.addEventListener("click",()=>{
    hambuger.classList.remove("active")
    nav.classList.active("active")
})
})