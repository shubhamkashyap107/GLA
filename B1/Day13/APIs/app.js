let btn = document.getElementById("btn")
let img = document.getElementById("image")


document.addEventListener("", async() => {
    console.log("OK");
    let rawData = await fetch("https://dog.ceo/api/breeds/image/random")
    let finalData = await rawData.json()
    img.setAttribute("src", finalData.message)
})

btn.addEventListener("click", async() => {
    let rawData = await fetch("https://dog.ceo/api/breeds/image/random")
    let finalData = await rawData.json()
    img.setAttribute("src", finalData.message)
})