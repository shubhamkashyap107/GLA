function hello(){
    console.log("Hello world");
}


// console.log(hello);
// hello()



let person = 
{
    name : "Gajju",
    age : 20,
    saysHi : function (){
        console.log("Gajju says hi");
    },
    fun : function(){
        console.log(person.age);
    }
}
// console.log(person.age);

// saysHi()
person.saysHi()
person.fun()

