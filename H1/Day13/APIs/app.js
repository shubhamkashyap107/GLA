let api = "https://dog.ceo/api/breeds/image/random"
let img = document.getElementById("img")
let btn = document.getElementById("btn")
// let data = fetch(api)
// console.log(data);


async function wait()
{
    data = await fetch(api)
    // console.log(data);
    let response = await data.json()
    // console.log(response);
    img.setAttribute("src", response.message)
}

btn.addEventListener("click", function(){
    wait()
} )


