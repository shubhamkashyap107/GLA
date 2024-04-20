let playBtn = document.getElementById("play")
let songName = document.getElementById("songname")
let progress = document.getElementById("progress")
let prevBtn = document.getElementById("back")
let nextBtn = document.getElementById("next")


let songs = [
    {
       name : "glossy",
       index :  0,
    },
    {
        name : "sad",
        index :  1
     },
     {
        name : "separation",
        index :  2
     },
     {
        name : "titanium",
        index :  3
     },
]

let currIdx = 0;
let currSong = new Audio("./media/glossy.mp3")


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


currSong.addEventListener("timeupdate", () => {
    // console.log("OK");
    progress.value =   currSong.currentTime * 100 / currSong.duration
})

progress.addEventListener("change", () => {
    currSong.currentTime = progress.value * currSong.duration / 100
})

nextBtn.addEventListener("click", () => {
    currIdx++;
    if(currIdx == songs.length)
    {
        currIdx = 0
    }
    let nameOfSong = songs[currIdx].name
    currSong.src = `./media/${nameOfSong}.mp3`
    currSong.play()
    songName.innerText = `${songs[currIdx].name}`
    playBtn.classList.remove("fa-play")
    playBtn.classList.add("fa-pause")
})

prevBtn.addEventListener("click", () => {
    currIdx--;
    if(currIdx < 0)
    {
        currIdx = songs.length - 1
    }
    let nameOfSong = songs[currIdx].name
    currSong.src = `./media/${nameOfSong}.mp3`
    currSong.play()
    songName.innerText = `${songs[currIdx].name}`
    playBtn.classList.remove("fa-play")
    playBtn.classList.add("fa-pause")
})


