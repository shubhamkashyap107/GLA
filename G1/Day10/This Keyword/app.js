let person = {
    name : "Shubham",
    age : 30,
    favColor : "Black",
    greet : function()
    {
        console.log(`${this.name} whose age is ${this.age} says hi`);
    }
}

person.greet()