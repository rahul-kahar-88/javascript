//                                                                 loops
// ====================================================================================================================================================================




//                                                              do while loop
// ====================================================================================================================================================================



// WAP a program to print TV 10 time 
// let a = 1
// do{
// console.log("TV")
// a++
// }while( a < 10)



// WAP a program to print digit 1 to 15 
// let a = 1
// do{
// console.log(a)
// a++
// }while( a <= 15)



// WAP to print digit 10 to 1 
// let a = 10
// do{
// console.log(a)
// a--
// }while( a >= 1)





//   let b
//   do{
//      b = parseInt(prompt("enter number"))
// }while( b != 0)





//                                                               while loop
// ====================================================================================================================================================================



// WAP to print tabIe of a number 
//  let  num = parseInt(prompt("enter a number"))
//   let  a = 1
// while( a<=10){ 
//     console.log(num*a)
//   a++
// }




//  WAP to print sum of all b/w 1 to 15
//   let  a = 15
//   let  sum = 0
// while( a>=1){ 
//    sum = sum + a
//   a--
// }
//  console.log(sum)




//                                                                for  loop
//====================================================================================================================================================================

// WAP to print sum of all odd number between 1 to 15
// let sum = 0
// for(let a = 1 ; a<=15 ; a++)
// {
//    if (a%2!=0)
//    {
//     sum = sum + a
//    }   
// }console.log(sum)





// document.write   -    this is use to print anything in main first page

// document.write("<h1> this is js page <br> hedh &nbsp fjngk kgjn </h1>")  


 
// print ***** pattern 
// for(let a=1 ; a<=5; a++){
//      document.write("*")
// }



//                                                             nested for loop    
// ====================================================================================================================================================================


/*
print   *****    pattern
        *****
        *****      */
// for(let a=1 ; a<=3; a++){   
//     for(let j=1 ; j<=5; j++){
//          document.write("*")
//     }
//     document.write("<br>")
// }





/*
print   *        pattern
        **   
        ***
        ****        */
// for(let a=1 ; a<=4; a++){   
//     for(let j=1 ; j<=a; j++){
//          document.write("*")
//     }
//     document.write("<br>")
// }






/*
print   ****       pattern
        ***   
        **
        *                  */
// for(let a=4 ; a>=1; a--){   
//     for(let j=1 ; j<=a; j++){
//          document.write("*")
//     }
//     document.write("<br>")
// }





/*
print   *****      pattern
        *   *  
        *   *
        *   *
        *****          */
// for(let a=1 ; a<=5; a++){
//     for(let j=1 ; j<=5; j++){
//         if( a==1 || a==5 || j==1 || j==5 ){
//          document.write("*")
//         }
//         else{
//             document.write("&nbsp&nbsp")
//         }
//     }
//     document.write("<br>")
// }






/*
print   *   *      pattern
         * *  
          *
         * *  
        *   *         */
// for(let a=1 ; a<=5; a++){
//     for(let j=1 ; j<=5; j++){
//         if( a==j || a + j == 6){
//          document.write("*")
//         }
//         else{
//             document.write("&nbsp&nbsp")
//         }
//     }
//     document.write("<br>")
// }






