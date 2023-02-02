let play = document.getElementById('play');
let pause = document.getElementById('pause');
let video = document.querySelector('video');
let timer = document.getElementById('timer');

play.addEventListener('click', ()=> {
    video.play();
});

pause.addEventListener('click', ()=> {
    video.pause()
});

video.onloadedmetadata = ()=> {
    timer.innerHTML = `Duracion video: ${video.duration}`;
};
