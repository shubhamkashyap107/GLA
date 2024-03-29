let btns = document.querySelectorAll("button")
let display = document.getElementById("display")


for(let item of btns)
{
    item.addEventListener("click", function(e){
        if(e.target.innerText == "AC")
        {
            display.value = "0"
        }
        else if(e.target.innerText == "=")
        {
            let ans = eval(display.value)
            display.value = ans
        }
        else
        {
            display.value += e.target.innerText
        }
    })
}




