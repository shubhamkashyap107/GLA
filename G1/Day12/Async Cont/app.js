// console.log("FIRST");
// setTimeout( () => {
//     console.log("SAUCE");
// }, 5000 )
// for(let i = 0; i < 9999999999; i++)
// {
   
// }
// // console.log("SAUCE");
// console.log("Last");


// setInterval(() => {
//     console.log("Hello");
// }, 2000)


// setTimeout(() => {
//     console.log("FIRST");
// }, 2000)

// setTimeout(() => {
//     console.log("SECOND");
// }, 2000)

setTimeout(() => {
    console.log("FIRST");
    setTimeout(() => {
        console.log("SECOND");
    }, 2000)
}, 2000)

