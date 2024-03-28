// // console.log("BUTTON CLICKED");

// let btn = document.getElementById("btn");

// btn.addEventListener("click", function(){
//     console.log("Button is clicked");
// } )


let sun = document.getElementById("light")
let moon = document.getElementById("dark")
let body = document.getElementById("body")

sun.addEventListener("click", function(){
    body.setAttribute("style","background-color:yellow")
})

moon.addEventListener("click", function(){
    body.setAttribute("style","background-color:black")
})