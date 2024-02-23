
let person = {
    name : "Shyam",
    age : 20,
    fun : function(){
        console.log("Hello");
    },
    fun2 : function(){
        console.log(this.age);
    }
}


person.fun2()


