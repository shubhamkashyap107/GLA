let playBtn = document.getElementById("play")
let slider = document.getElementById("slider")
let songname = document.getElementById("songname")
let next = document.getElementById("next")
let prev = document.getElementById("prev")



let songs = [
    {
        idx : 0, 
        name : "Ethereal" //songs[0]
    },
    {
        idx : 1, 
        name : "Movement"
    },
    {
        idx : 2, 
        name : "Perfect"
    },
    {
        idx : 3, 
        name : "Solitude"
    },
]

let currIdx = 0;
let currSong = new Audio("./media/song0.mp3")


playBtn.addEventListener("click", function(){

    if(playBtn.classList.contains("fa-play"))
    {
        currSong.play()
        playBtn.classList.remove("fa-play")
        playBtn.classList.add("fa-pause")
        songname.innerText = songs[currIdx].name
    }
    else
    {
        currSong.pause()
        playBtn.classList.remove("fa-pause")
        playBtn.classList.add("fa-play")
    }
    
} )


currSong.addEventListener("timeupdate", () => {
    slider.value = (currSong.currentTime * 100) / currSong.duration
})

slider.addEventListener("change", () => {
    currSong.currentTime = (slider.value * currSong.duration) / 100
})


next.addEventListener("click", function(){
    currIdx++;
    if(currIdx == songs.length)
    {
        currIdx = 0
    }
    currSong.src = `./media/song${currIdx}.mp3`
    currSong.play()
    songname.innerText = songs[currIdx].name

})

prev.addEventListener("click", function(){
    currIdx--;
    if(currIdx < 0)
    {
        currIdx = songs.length - 1
    }
    currSong.src = `./media/song${currIdx}.mp3`
    currSong.play()
    songname.innerText = songs[currIdx].name

})

// currSong.volume = 1