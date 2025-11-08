var a=0
var h1=document.querySelector('#h3')
var st

let x=document.querySelector('#btn1')
x.addEventListener('click',function(){
    st=setInterval(()=>{
        h1.innerHTML=++a
    },1000)
})

let y=document.querySelector('#btn2')
y.addEventListener('click',function(){
    clearInterval(st)
})


let z=document.querySelector('#btn3')
z.addEventListener('click',function(){
    h1.innerHTML=0
    clearInterval(st)
})