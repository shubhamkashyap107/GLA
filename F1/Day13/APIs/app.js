url = "https://dog.ceo/api/breeds/image/random"
let img = document.getElementById("image")
let btn = document.getElementById("btn")
// let data = fetch(url)
// console.log(data);

 async function getData(){
    let data =  await fetch(url)
    let response =  await data.json()
    // console.log(response);
    img.setAttribute("src", response.message)
}


btn.addEventListener("click", function(){
    getData()
})
// getData()