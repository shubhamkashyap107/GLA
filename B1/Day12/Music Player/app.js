let playBtn = document.getElementById("play")
let songname = document.getElementById("songname")
let slider = document.getElementById("slider")
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let img = document.getElementById("img")


let songs = [
    {
        idx : 0,
        name : "Better",
        imgUrl : "https://images.unsplash.com/photo-1711968558634-a8aa796e6468?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
    },
    {
        idx : 1,
        name : "Ethereal",
        imgUrl : "https://images.unsplash.com/photo-1711968558560-62e6cff25ff6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        idx : 2,
        name : "Perfect",
        imgUrl : "https://plus.unsplash.com/premium_photo-1712160362268-68616bf1c0d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        idx : 3,
        name : "Soltitude", 
        imgUrl : "https://images.unsplash.com/photo-1712313463883-bbd8827740c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D"
    },
]


let currSongIdx = 0;
let currSong = new Audio("./media/song0.mp3")


playBtn.addEventListener("click", () => {

    if(playBtn.classList.contains("fa-play"))
    {
        currSong.play()
        playBtn.classList.remove("fa-play")
        playBtn.classList.add("fa-pause")
        songname.innerText = songs[currSongIdx].name
        img.setAttribute("src", songs[currSongIdx].imgUrl)
    }
    else
    {
        currSong.pause()
        playBtn.classList.remove("fa-pause")
        playBtn.classList.add("fa-play")
    }


})

currSong.addEventListener("timeupdate", () => {
    // console.log("EVENT CHALLA HAI");
    slider.value = (currSong.currentTime * 100) / currSong.duration
})

slider.addEventListener("change", () => {
    currSong.currentTime = (slider.value * currSong.duration) / 100
})



next.addEventListener("click", () => {
    currSongIdx++
    if(currSongIdx >= songs.length)
    {
        currSongIdx = 0
    }
    currSong.src = `./media/song${currSongIdx}.mp3`
    songname.innerText = songs[currSongIdx].name
    currSong.play()
    img.setAttribute("src", songs[currSongIdx].imgUrl)

})

prev.addEventListener("click", () => {
    currSongIdx--
    if(currSongIdx < 0)
    {
        currSongIdx = songs.length - 1
    }
    currSong.src = `./media/song${currSongIdx}.mp3`
    songname.innerText = songs[currSongIdx].name
    currSong.play()
    img.setAttribute("src", songs[currSongIdx].imgUrl)

})


