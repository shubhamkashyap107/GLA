let person = 
{
    name : "Gajju",
    age : 20,
    saysHi : function (){
        console.log("Gajju says hi");
    },
    fun : function(){
        console.log(this.age);
    },

    fun2 : function(){
        console.log(`${this.name} whose age is ${this.age} says hi`);
    }
}

person.fun()
person.fun2()
