// let lists = document.getElementById("list");
// console.log(lists);


// let list = document.getElementsByClassName("abc")
// console.log(list);

// let items = document.getElementsByTagName("li")
// console.log(items);



// let list = document.querySelector("li")
// console.log(list);

// let items = document.querySelectorAll("li")
// console.log(items);


let list = document.getElementById("list");

// console.log(list);

let newEle = document.createElement("li")
newEle.innerText = "D"

list.appendChild(newEle)



let item = document.getElementById("random")
item.remove()