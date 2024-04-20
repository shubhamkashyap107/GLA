let btn = document.getElementById("btn")
let image = document.getElementById("img")

btn.addEventListener("click", async() => {
    let dogData = await fetch("https://dog.ceo/api/breeds/image/random")
    let finalDogData =  await dogData.json()
    image.setAttribute("src", finalDogData.message  )
})