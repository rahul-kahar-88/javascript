// function add(){
//     let wrapper = document.querySelector('#container')
//     wrapper.classList.add('wrapper')
// }
// function remove(){
//     let container = document.querySelector('#container')
//     container.classList.remove('wrapper')
// }
// function both(){
//     let cn = document.querySelector('#container')
//     cn.classList.toggle('wrapper')
// }




function theme(){
 let a = document.body.classList.toggle('theme') 
 if( a==true){
    document.querySelector('#btn').textContent='light'
 }
 else{
  document.querySelector('#btn').textContent='dark'
 }
}