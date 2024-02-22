// // let p1 = {
// //     name : "Shubham",
// //     age : 20,
// //     fun : function ()
// //     {
// //         console.log("Hello from inside the obj");
// //     },
// //     fun2 : function(){
// //         console.log(p1.age);
// //     }
// // }


// let p1 = {
//     name : "Shubham",
//     age : 20,
//     fun : function ()
//     {
//         console.log("Hello from inside the obj");
//     },
//     fun2 : function(){
//         console.log(this.age);
//     }
// }


// // p1.fun2()
// p1.fun2()


let person = {
    name : "Virat",
    age : 37,
    greet : function(){
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
}


person.greet()








