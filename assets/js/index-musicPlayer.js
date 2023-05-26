const wrapper = document.querySelector('.wrapper')
musicImg = wrapper.querySelector('.img-area img')
musicName = wrapper.querySelector('.song-details .name')
musicArtist = wrapper.querySelector('.song-details .artist')
mainAudio = wrapper.querySelector('#main-audio')
playPauseBtn = wrapper.querySelector('.play-pause')
prevBtn = wrapper.querySelector('#prev')
nextBtn = wrapper.querySelector('#next')
progressArea = wrapper.querySelector('.progress-area')
progressBar = wrapper.querySelector('.progress-bar')
musicList = wrapper.querySelector('.music-list')
showMoreBtn = wrapper.querySelector('#more-music')
hideMusicBtn = musicList.querySelector('#close')



let musicIndex = Math.floor((Math.random() * allMusic.length) + 1)

window.addEventListener('load', () =>{
    loadMusic(musicIndex)
    playingNow()
    
    

})


function loadMusic(indexNumb){
    musicName.innerHTML = allMusic[indexNumb - 1].name;
    musicArtist.innerHTML = allMusic[indexNumb - 1].artist;
    musicImg.src = `assets/Shadmehr/${allMusic[indexNumb - 1].img}.jpg`
    mainAudio.src = `assets/audio/${allMusic[indexNumb - 1].src}.mp3`


}


function playMusic(){
    wrapper.classList.add('paused');
    playPauseBtn.querySelector('i').innerHTML = '<i class="bi bi-pause-fill"></i>'
    mainAudio.play()
}

function pauseMusic(){
    wrapper.classList.remove('paused');
    playPauseBtn.querySelector('i').innerHTML = '<i class="bi bi-play-fill"></i>'
    mainAudio.pause()
}


function nextMusic(){
    musicIndex++
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex
    loadMusic(musicIndex)
    playMusic()
    playingNow()
}

function prevMusic(){
    musicIndex--
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex
    loadMusic(musicIndex)
    playMusic()
    playingNow()
}


playPauseBtn.addEventListener('click', ()=>{
    const isMusicPaused = wrapper.classList.contains('paused')
    isMusicPaused ? pauseMusic() : playMusic()
    playingNow()
})


nextBtn.addEventListener('click', ()=> {
    nextMusic()
})

prevBtn.addEventListener('click', ()=> {
    prevMusic()
})



mainAudio.addEventListener('timeupdate', (e)=>{
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    let progressWidth = (currentTime / duration) * 100
    progressBar.style.width = `${progressWidth}%`

    let musicCurrentTime = wrapper.querySelector('.current')
    musicDuration = wrapper.querySelector('.duration')

    mainAudio.addEventListener('loadeddata', ()=>{

        let audioDuration = mainAudio.duration
        let totalMin = Math.floor(audioDuration / 60)
        let totalSec = Math.floor(audioDuration % 60)
        if (totalSec < 10){
            totalSec = `0${totalSec}`
        }
        musicDuration.innerHTML = `${totalMin}:${totalSec}`

    })

    let currentMin = Math.floor(currentTime / 60)
    let currentSec = Math.floor(currentTime % 60)
    if (currentSec < 10){
        currentSec = `0${currentSec}`
    }
    musicCurrentTime.innerHTML = `${currentMin}:${currentSec}`

})


progressArea.addEventListener('click', (e)=>{
    let progressWidthhal = progressArea.clientWidth
    let clickedOffSetX = e.offsetX
    let songDuration = mainAudio.duration
    mainAudio.currentTime = (clickedOffSetX / progressWidthhal) * songDuration
    playMusic()

})


const repeatBtn = wrapper.querySelector('#repeat-plist')
repeatBtn.addEventListener('click', ()=>{
    let getText = repeatBtn.innerHTML
    switch(getText){

        case '<i class="bi bi-repeat"></i>' :
            repeatBtn.innerHTML = '<i class="bi bi-repeat-1"></i>'
            repeatBtn.setAttribute('title', 'Song looped')
            break

        case '<i class="bi bi-repeat-1"></i>':
            repeatBtn.innerHTML = '<i class="bi bi-shuffle"></i>'
            repeatBtn.setAttribute('title', 'Shuffle')
            break

        case '<i class="bi bi-shuffle"></i>':
                repeatBtn.innerHTML = '<i class="bi bi-repeat"></i>'
                repeatBtn.setAttribute('title', 'Playlist looped')
            break
    }
})


mainAudio.addEventListener('ended', ()=>{
    let getText = repeatBtn.innerHTML

    switch(getText){

        case '<i class="bi bi-repeat"></i>' :
            nextMusic()
            break

        case '<i class="bi bi-repeat-1"></i>':
            mainAudio.currentTime = 0
            loadMusic(musicIndex)
            playMusic()
            break

        case '<i class="bi bi-shuffle"></i>':
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1)
            do{
                let randIndex = Math.floor((Math.random() * allMusic.length) + 1)
            }
            while
            (musicIndex == randIndex)
            musicIndex = randIndex
            loadMusic(musicIndex)
            playMusic()
            playingNow()
            break
    }
    

})


showMoreBtn.addEventListener('click', ()=>{
    musicList.classList.toggle('show')
})

hideMusicBtn.addEventListener('click', ()=>{
    showMoreBtn.click()
})

const ulTag = wrapper.querySelector('ul')

for(let i = 0; i < allMusic.length; i++){
    let liTag = `<li li-index= '${i + 1}'>
                    <div class="row">
                    <span>${allMusic[i].name}</span>
                    <p>${allMusic[i].artist}</p>
                    </div>
                    <audio class="${allMusic[i].src}" src="assets/audio/${allMusic[i].src}.mp3"></audio>
                    <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
                    </li>`

                    ulTag.insertAdjacentHTML('beforeend', liTag)

                    let liAudioTagDuration = ulTag.querySelector(`#${allMusic[i].src}`)
                    let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`)


                    liAudioTag.addEventListener('loadeddata', ()=>{
                        let audioDuration = liAudioTag.duration
                        let totalMin = Math.floor(audioDuration / 60)
                        let totalSec = Math.floor(audioDuration % 60)
                        if (totalSec < 10){
                            totalSec = `0${totalSec}`
                        }
                        liAudioTagDuration.innerHTML = `${totalMin}:${totalSec}`
                        liAudioTagDuration.setAttribute('t-duration',`${totalMin}:${totalSec}`)
                    })

}


const allLiTags = ulTag.querySelectorAll('li')

function playingNow(){
    for (let j = 0; j < allLiTags.length; j++) {
        let audioTag = allLiTags[j].querySelector('.audio-duration')
        if(allLiTags[j].classList.contains('playing')){
            allLiTags[j].classList.remove('playing')

            let adDuration = audioTag.getAttribute('t-duration')
            audioTag.innerHTML = adDuration
        }
    
        if(allLiTags[j].getAttribute('li-index')== musicIndex){
            allLiTags[j].classList.add('playing')
            audioTag.innerHTML = 'playing'
        }

        allLiTags[j].setAttribute('onclick', 'clicked(this)')
    }
    
}
function clicked(element){
    let getLiIndex = element.getAttribute('li-index')
    musicIndex = getLiIndex

    loadMusic(musicIndex)
    playMusic()
    playingNow()
}


