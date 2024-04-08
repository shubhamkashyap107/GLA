let list = document.getElementById("dropdown");
let btn = document.getElementById("btn")
let ul = document.getElementById("ul")

btn.addEventListener("click", async () => {
    ul.innerText = ""
    let input = list.value
    let data = await fetch(`https://api.chucknorris.io/jokes/search?query=${input}`)
    let response = await data.json()
    
    let arr = response.result
   
    for(let item of arr)
    {
        let newLi = document.createElement("li")
        newLi.innerText = item.value
        ul.appendChild(newLi)
    }
})
