// function test(){
//     console.log("Hello from test");

//     function inner(){
//         console.log("Hello from inner");

//         return "PIKACHU"
//     }

//     return inner
// }
// test()
// console.log(test());
// inner()
// let retFn = test()
// console.log(retFn());

// function sum(a, b){
//     return a + b
// }
// sum(4,5)
// let ans = sum(4,10)
// console.log(ans);
// console.log(sum(2,2));

function calculator(a, b, fn){
    let ans = fn(a,b)
    console.log(ans);
}

function sum(a,b){
    return a + b
}
function mul(a,b){
    return a * b
}

calculator(3,4, function(a,b){
    return a * b
})














