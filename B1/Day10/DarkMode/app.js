let lightMode = document.getElementById("sun")
let darkMode = document.getElementById("moon")
let body = document.getElementById("body")

darkMode.addEventListener( "click" , function(){
    body.setAttribute("style", "background-color:black")
} )

lightMode.addEventListener( "click" , function(){
    body.setAttribute("style", "background-color:white")
} )