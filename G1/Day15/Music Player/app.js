let playBtn = document.getElementById("play")
let slider = document.getElementById("slider")
let songname = document.getElementById("songname")
let next = document.getElementById("next")
let volBtn = document.getElementById("volBtn")
let volume = document.getElementById("volume")




let songs = [
    {
        id : 1,
        display : "Better"
    },
    {
        id : 2,
        display : "Ethereal"
    },
    {
        id : 3,
        display : "Perfect"
    },
    {
        id : 4,
        display : "Soltitude"
    },
]

let currID = 0
let currSong = new Audio(`./media/song${currID}.mp3`)



playBtn.addEventListener("click", () => {
    if(playBtn.classList.contains("fa-play"))
    {
        currSong.play()
        songname.innerText = songs[currID].display
        playBtn.classList.remove("fa-play")
        playBtn.classList.add("fa-pause")
    }
    else 
    {
        currSong.pause()
        playBtn.classList.remove("fa-pause")
        playBtn.classList.add("fa-play")
    }
})

currSong.addEventListener("timeupdate", () => {
    slider.value = (currSong.currentTime / currSong.duration) * 100
})

slider.addEventListener("change", () => {
    currSong.currentTime = (slider.value * currSong.duration) / 100
})

next.addEventListener("click", () => {
    currID++;
    if(currID >= songs.length)
    {
        currID = 0
    }
    currSong.src = `./media/song${currID}.mp3`
    currSong.play()
    songname.innerText = songs[currID].display

})


back.addEventListener("click", () => {
    currID--;
    if(currID < 0)
    {
        currID = songs.length - 1
    }
    currSong.src = `./media/song${currID}.mp3`
    currSong.play()
    songname.innerText = songs[currID].display
})

