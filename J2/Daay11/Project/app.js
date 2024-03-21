let navbar = document.getElementById("navbar")
let body = document.getElementById("bodie")
let btns = document.getElementsByClassName("icon")
let light = document.getElementById("sun")
let dark = document.getElementById("moon")


dark.addEventListener( "click", () => {
    body.setAttribute("style", "background-color:black")
    navbar.setAttribute("style", "background-color:white")

    for(let item of btns)
    {
        item.setAttribute("style", "color:black")
    }
} )

light.addEventListener( "click", () => {
    body.setAttribute("style", "background-color:white")
    navbar.setAttribute("style", "background-color:black")

    for(let item of btns)
    {
        item.setAttribute("style", "color:white")
    }
} )










