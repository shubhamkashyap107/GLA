let light = document.getElementById("sun")
let dark = document.getElementById("moon")
let body = document.querySelector("body")
let navbar = document.getElementById("navbar")
let btns = document.getElementsByClassName("xyz")
// console.log(btns);
// console.log(light);
// console.log(dark);

light.addEventListener( "click", function(){
    body.setAttribute("style", "background-color:white")
    navbar.setAttribute("style", "background-color:black")
    for(let item of btns)
    {
        item.setAttribute("style", "color:white")
    }
} )

dark.addEventListener( "click", function(){
    body.setAttribute("style", "background-color:black")
    navbar.setAttribute("style", "background-color:white; ")

    for(let item of btns)
    {
        item.setAttribute("style", "color:black")
    }
} )



