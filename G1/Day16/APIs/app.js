let btn = document.getElementById("btn")
let img = document.getElementById("img")

btn.addEventListener("click", async () => {
    let data = await fetch("https://dog.ceo/api/breeds/image/random")
    let finalData = await data.json()
    // console.log(finalData);
    img.setAttribute("src", finalData.message);
    
})