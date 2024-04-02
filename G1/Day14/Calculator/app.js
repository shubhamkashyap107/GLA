let disp = document.getElementById("display")
let btns = document.getElementsByTagName("button")


for(let item of btns)
{
    item.addEventListener("click", function(event){
        if(event.target.innerText == "AC")
        {
            disp.value = 0
        }
        else if(event.target.innerText == "=")
        {
            try {
                let ans = eval(disp.value)
                disp.value = ans        
            } catch (error) {
                disp.value = "Invalid Input"
            }
        }
        else
        {
            disp.value += event.target.innerText
        }
    })
}








