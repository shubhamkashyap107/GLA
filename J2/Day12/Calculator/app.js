let btns = document.querySelectorAll("button")
let disp = document.getElementById("disp")

for(let item of btns)
{
    item.addEventListener("click", (e) => {
        if(e.target.innerText == "C")
        {
            disp.value = ""
        }
        else if(e.target.innerText == "=")
        {
            disp.value = eval(disp.value)
        }
        else
        {
            disp.value += e.target.innerText;
        }
    })
}
