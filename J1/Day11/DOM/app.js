// let list = document.getElementById("list")
// console.log(list);

// let item = document.getElementsByClassName("items")
// console.log(item);

// let ul = document.getElementsByTagName("ul")
// console.log(ul);

// let list = document.querySelector("li")
// console.log(list);

// let items = document.querySelectorAll("li")
// console.log(items);

let del = document.getElementById("del")
del.remove()
let list = document.getElementById("list")
console.log(list);

let newLi = document.createElement("li")
newLi.innerText = "D"

list.appendChild(newLi)



