// Variables
const b1=document.querySelector('.b1')
const b2=document.querySelector('.b2')
const b3=document.querySelector('.b3')
const co1=document.querySelector('.co-1')
const co2=document.querySelector('.co-2')
const co3=document.querySelector('.co-3')


b1.addEventListener('click',()=>{
    co1.style.display="block"
    co2.style.display="none"
    co3.style.display="none"
    b1.classList.toggle("active")
    b2.classList.remove("active")
    b3.classList.remove("active")
},false)

b2.addEventListener('click',()=>{
    co2.style.display="block"
    co1.style.display="none"
    co3.style.display="none"
    b2.classList.toggle("active")
    b1.classList.remove("active")
    b3.classList.remove("active")
},false)

b3.addEventListener('click',()=>{
    co3.style.display="block"
    co1.style.display="none"
    co2.style.display="none"
    b3.classList.toggle("active")
    b2.classList.remove("active")
    b1.classList.remove("active")
},false)
