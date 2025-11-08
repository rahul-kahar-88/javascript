var q=0
var b=document.querySelector('#h3')

let a=document.querySelector('#h1')
a.addEventListener('click',function(){
b.innerHTML=++q

})
let x=document.querySelector('#h2')
x.addEventListener('click',function(){
    if(q>0)
    b.innerHTML=--q
})

let y=document.querySelector('#h4')
y.addEventListener('click',function(){
    b.innerHTML=0
})