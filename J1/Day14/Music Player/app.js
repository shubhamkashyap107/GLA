let playBtn = document.getElementById("play")
let songname = document.getElementById("songname")
let slider = document.getElementById("slider")
let next = document.getElementById("next")
let back = document.getElementById("prev")

let songs = [
    {
        index:0,
        name : "Better"
    },
    {
        index:1,
        name : "Ethereal"
    },
    {
        index:2,
        name : "Perfect"
    },
    {
        index:3,
        name : "Soltitude"
    }
]

let currIdx = 0;
let currSong = new Audio("./media/song0.mp3")

playBtn.addEventListener("click", () => {
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
})


currSong.addEventListener("timeupdate", () => {
    slider.value = (currSong.currentTime * 100) / currSong.duration
})

slider.addEventListener("change", () => {
    currSong.currentTime = (slider.value * currSong.duration) / 100
})

next.addEventListener("click", () => {
    currIdx++;
    if(currIdx == songs.length)
    {
        currIdx = 0
    }
    currSong.src = `./media/song${currIdx}.mp3`
    currSong.play()
    songname.innerText = songs[currIdx].name

})

back.addEventListener("click", () => {
    currIdx--;
    if(currIdx < 0)
    {
        currIdx = songs.length - 1
    }
    currSong.src = `./media/song${currIdx}.mp3`
    currSong.play()
    songname.innerText = songs[currIdx].name

})