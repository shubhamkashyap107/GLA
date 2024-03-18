// function abc()
// {
//     console.log("Hello from abc function");
    

//     function xyz(){
//         console.log("Hello from xyz");
//         return "Returned from xyz fn"
//     }


//     return xyz
// // }
// let innerFN = abc()
// console.log(innerFN());


// abc()
// console.log(abc())
// xyz()


// function abc(){
    
// }

// let fn = function(){
//     console.log("HELLO");
// }

// abc()
// fn()




// let af = () => {
//     console.log("MEOW");
// }

// af()


// function sum(a, b){
//     return a + b
// }

// let ans = sum(1,2)
// console.log(ans);



function calculator(a, b, fn)
{
    let ans = fn(a,b)
    console.log(ans);
}
function sum(a, b){
    return a + b
}
function mul(a , b){
    return a * b
}
calculator(2,10,sum)