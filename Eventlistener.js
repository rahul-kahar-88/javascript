let a=document.getElementById('h1')
a.addEventListener('click',function(){
    alert("Working....")
})


let b=document.querySelector('#h2')
b.addEventListener('contextmenu',function(){
    alert("Working.....")
})


let c=document.querySelector('#h3')
c.addEventListener('dblclick',function(){
    alert("Working......")
})


let d=document.querySelector('#h4')
d.addEventListener('mouseenter',function(){
    alert("Working....")
})

let e=document.querySelector('#h5')
e.addEventListener('mouseleave',function(){
    alert("Working.....")
})