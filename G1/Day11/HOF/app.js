// function sum(a,b){
//     return a + b
// }


// let ans = sum(1,2)
// console.log(ans);



// function greet(user){
//     return `Hello ${user} from the greet function`
// }

// let ans = greet("GABBAR")
// console.log(ans);






function calculate(a,b, fn)
{
   let ans = fn(a,b)
   console.log(ans);
}

function sum(a,b)
{
    return a + b
}
function mul(a,b)
{
    return a * b
}


calculate(1,2, mul)


