let light = document.getElementById("sun")
let dark = document.getElementById("moon")
let icons = document.getElementsByClassName("x")
let body =  document.getElementById("body")
let navbar = document.getElementById("navbar")


dark.addEventListener("click", () => {
    body.setAttribute("style","background-color:black")
    navbar.setAttribute("style", "background-color:white")

    for(let item of icons)
    {
        item.setAttribute("style", "color:black")
    }
})

light.addEventListener("click", () => {
    body.setAttribute("style","background-color:white")
    navbar.setAttribute("style", "background-color:black")

    for(let item of icons)
    {
        item.setAttribute("style", "color:white")
    }
})




