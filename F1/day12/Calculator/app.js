let display = document.getElementById("display")
let btns = document.getElementsByTagName("button")

for(let item of btns)
{
    item.addEventListener("click", function(event){
        if(event.target.innerText == "AC")
        {
            display.value = ""
        }
        else if(event.target.innerText == "=")
        {
            try {
                let ans = eval(display.value)
                display.value = ans
            } catch (error) {
                display.value="tumse na ho payga"
            }
            
        }
        else{
            display.value+=event.target.innerText
        }
    })
}


