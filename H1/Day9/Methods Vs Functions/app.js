// function abc(){
//     console.log("Hello from inside abc");
// }



// abc()


let obj = {
    x : 1,
    y : 2,
    z : 3,

    fun : function (){
        console.log("hello from abc inside obj");
    },
    fun2 : function(){
        // console.log(obj.x);
        console.log(`x is ${obj.x}, y is ${obj.y}, z is ${obj.z}`);
    }
}

// console.log(obj.y);
// console.log(obj.fun());
obj.fun2()

