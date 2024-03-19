// let list = document.getElementById("list")
// console.log(list);


// let listItems = document.getElementsByClassName("items")
// console.log(listItems);

// let items = document.getElementsByTagName("li")
// console.log(items);


// let item = document.querySelector("li")
// console.log(item);

// let items = document.querySelectorAll("li")
// console.log(items);


let list = document.getElementById("list")
let delItem = document.getElementById("del")
delItem.remove()
// console.log(list);

let newLi = document.createElement("li")
newLi.innerText = "D"

list.appendChild(newLi)