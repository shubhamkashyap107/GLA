// let obj = {
//     name : "ABC",
//     age : 24,
//     fun : function(){
//       console.log("FUnction inside object")
      
//       function inner(){
//         console.log("Inside inner function")
//       }
      
//       return inner
//     }
//   }
  
// console.log(obj.name)
// let func = obj.fun()
// // console.log(func);
// func()


// let fn = function(){
//     console.log("Hello")
// }
// abc()
// fn()



// let fn = () =>{
//     console.log("Hello");
// }
// fn()


// arguements / paramaters
// function sum(a, b){
//     return a + b
// }


// console.log(sum(10,20))

// let ans = sum(10,20)
// console.log(ans);

function calculator(a, b, fn){
    console.log(fn(a,b))
}


function mul(a,b){
    return a * b
}
function sum(a,b){
    return a + b    
}


calculator(2,5, sum)














