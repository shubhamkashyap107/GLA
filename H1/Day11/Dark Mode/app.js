let lightMode = document.getElementById("sun")
let darkMode = document.getElementById("moon")
let body = document.getElementById("bodie")
let navbar = document.getElementById("navbar")
let text = document.getElementsByClassName("text")
// console.log(text);


darkMode.addEventListener("click", () => {
    body.setAttribute("style","background-color:black")
    navbar.setAttribute("style", "background-color:white")

    for(let item of text)
    {
        item.setAttribute("style", "color:black")
    }

})

lightMode.addEventListener("click", () => {
    body.setAttribute("style","background-color:white")
    navbar.setAttribute("style", "background-color:black")

    for(let item of text)
    {
        item.setAttribute("style", "color:white")
    }

})





