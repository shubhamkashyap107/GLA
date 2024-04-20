let playBtn = document.getElementById("play")
let songName = document.getElementById("songname")
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("back")
let progress = document.getElementById("progress")


let songs = [
    {
        index : 0,
        name : "groovy"
    },
    {
        index : 1,
        name : "dabang"
    },
    {
        index : 2,
        name : "movement"
    },
    {
        index : 3,
        name : "solitude"
    },
]


let currIdx = 0
let currSong = new Audio("./media/groovy.mp3")

playBtn.addEventListener("click", function(){
    

    if(playBtn.classList.contains("fa-play"))
    {
        currSong.play()
        playBtn.classList.remove("fa-play")
        playBtn.classList.add("fa-pause")
        songName.innerText = `${songs[0].name}`
    }
    else
    {
        currSong.pause()
        playBtn.classList.remove("fa-pause")
        playBtn.classList.add("fa-play")
    }
})



nextBtn.addEventListener("click", () => {
    currIdx++
    if(currIdx == songs.length)
    {
        currIdx = 0
    }
    currSong.src = `./media/${songs[currIdx].name}.mp3`
    currSong.play()
    songName.innerText = `${songs[currIdx].name}`
    playBtn.classList.remove("fa-play")
    playBtn.classList.add("fa-pause")
})

prevBtn.addEventListener("click", () => {
    currIdx--
    if(currIdx < 0)
    {
        currIdx = songs.length - 1
    }
    currSong.src = `./media/${songs[currIdx].name}.mp3`
    currSong.play()
    songName.innerText = `${songs[currIdx].name}`
    playBtn.classList.remove("fa-play")
    playBtn.classList.add("fa-pause")
})


currSong.addEventListener("timeupdate", ()=> {
    progress.value = (currSong.currentTime * 100) / currSong.duration
})


progress.addEventListener("change", () => {
    currSong.currentTime = (progress.value * currSong.duration) / 100
})