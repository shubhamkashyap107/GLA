let obj = {
    x : 1,
    y : 2,
    z : 3,

    fun : function (){
        console.log("hello from abc inside obj");
    },
    fun2 : function(){
        // console.log(obj.x);
        console.log(`x is ${this.x}, y is ${this.y}, z is ${this.z}`);
    }
}


obj.fun2()