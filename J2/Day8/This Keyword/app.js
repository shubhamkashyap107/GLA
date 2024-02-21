
// let person = {
//     name : "VIRAT",
//     age : 35,
//     // greet : function(){
//     //     console.log("BEN STOKES");  // methods
//     // }
//     greet : function(){
//         console.log(`Hello my name is ${person.name} and my age is ${person.age}`);  // methods
//     }
// }


let person = {
    name : "VIRAT",
    age : 35,
    // greet : function(){
    //     console.log("BEN STOKES");  // methods
    // }
    greet : function(){
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);  // methods
    },
    fn : function(){
        console.log(this.age);
    }
}


// person.greet()
person.fn()






















