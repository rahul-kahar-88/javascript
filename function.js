 
//                                                                    function   
// =========================================================================================================================================================================





// ======================================= no argument and no return ==========================================

// WAP to print sum of two number using function
// function sum ( )
// {
//     let a=15
//     let b=14
//     console.log(a+b)
// }
// sum ( )




// WAP to check to find area of rectangle using function and input must be taken from the user 
// function sum ( )
// {
//     let  l = parseInt(prompt("enter a number"))
//     let  b = parseInt(prompt("enter a number"))
//     console.log(l*b)
// }
// sum ( )



/*
WAP to take input from the user 20 to 1 if user give input 10 to 1 then print the number given from the user to 10 and second if user give input 20 to 11 then print
the number 20 to 1 otherwise if input is greater than 20 then print invalid
*/ 
// function sum ( ){
//     let  n = parseInt(prompt("enter a number"))
// {
//        if ( n>=11 && n<=20) { 
//    for(let a=20 ; a>=1; a--){
//        console.log(a)
//     }
// }
//     else if (n=>1 && n<=10 ){
//         for(let i=10 ; i>=n; i--)  { 
//          console.log(i)
//     }  
// }
//     else (n<=21 )
//      {
//         console.log("invalid")
//     }
// }
// }
//   sum ( )




// ======================================with argument and no return ===================================



// WAP to take input from the user and check number is even or odd using function type two with arg & no return 
//  let  a = parseInt(prompt("enter a number"))
// function sum (b)
// { 
//    if( b%2==0){
//    console.log("even")
//    }
//    else{
//         console.log("odd")
//    }
// }
// sum (a )




// WAP to print a reverse table of any number using function type two with arg & no return value
//  let  num = parseInt(prompt("enter a number"))
// function sum (num)
// {
//      for(let a = 10; a>=1; a--){   
//     console.log(num*a)
// } 
// }
// sum (num )







// let  n = parseInt(prompt("enter a number"))
 
// function dem ( num)
// {
//   let sum = 0
//     if( num%2==0  ){
//     for(let a=1;a<=15;a++) {
//    sum = sum + a                                                                         //incomplete
//    return sum
//  } }
//  else
//     {
//          console.log(num)
//    }
//      }
//         console.log(dem (n))


//     



// ============================= with argument and return ==============================================



// function dem (name)
// {
//     return name  
   
// } 
// let recieve = dem ("rahuI")
//  console.log(recieve)


//  console.log(dem ("rahuI"))

//======================================  no argument & return =========================================

// function demo(){
//     let a = 9
//     return a+a
// }
// console.log(demo());

//wap to take input from user and find area of triangle using type 4 no argument & return
// function areaOfTriangle() {
//     // Take input from user
//     let base = parseFloat(prompt("Enter the base of the triangle:"));
//     let height = parseFloat(prompt("Enter the height of the triangle:"));

//     // Calculate area
//     let area = 0.5 * base * height;

//     // Return the result
//     return area;
// }

// // Call the function and display the result
// let result = areaOfTriangle();
// document.write("The area of the triangle is: " + result);

//

//  functon name is called named function
// funtion withot name is called anonymus function 

//  =====================================   arrow function ===================================2015 built in ECMA ES6
//syntex
//1. ()=>{return}
//2. ()=>( )
//3. ()=>
//4.  =>
//5. =>()
//6. =>{return}

// CALLBACK FUNCTION
// function fun (function----------> callback function)
//{


//}-------------------------> high order function






//   arrow function



//==================================   arrow function with no argument    ======================================
/*
let fun = () => {return "Rahul"}
console.log(fun ())
*/




// =================================   arrow function with argument  ===========================================
/*
let fun1 = (a) => {return a+a}
console.log(fun1 (10)) 
*/



/*
let dem = (num) => (num+num)
let n = dem(8)
console.log(n) 
 */



/*
let dem1 = num => (num+num)
let a = dem1(10)
console.log(a)
*/



// let dem1 = num => (num*num)
// let a = dem1( parseInt(prompt("enter a number")))
// console.log(a)



// let dem2 = num => (num*num*num)
// let n = dem2( parseInt(prompt("enter a number")))
// console.log(n)



// let l = ( parseInt(prompt("enter a length")))
// let b = ( parseInt(prompt("enter a bridth")))
// let dem = (x,y) => (x*y)
// console.log (dem(l,b))