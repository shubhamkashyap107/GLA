let sun = document.getElementById("light")
let moon = document.getElementById("dark")
let body = document.getElementById("bodie")
// console.log(sun);
// console.log(moon);


moon.addEventListener( "click", function(){
    body.setAttribute("style", "background-color:black; color: white")
} )

sun.addEventListener( "click", function(){
    body.setAttribute("style", "background-color:white")
} )


let list = document.getElementById("list")
let btn = document.getElementById("btn")
let input = document.getElementById("text")



btn.addEventListener("click", () => {
    let newEle = document.createElement("li")
    let task = input.value
    input.value = ""
    newEle.innerText = task
    list.appendChild(newEle)
})