const dino = document.querySelector('.dino');
const obstacle = document.querySelector('.obstacle');
const startButton = document.getElementById('start-button'); 
const bgMusic = document.getElementById('bg-music'); 
const jtone = document.getElementById('jump-sound'); 
const mutebutton = document.getElementById('mute-button');

let isJumping = false;
let isGameOver = false;
let isMuted = false ;


startButton.addEventListener('click', startGame); 



function startGame() {
    startButton.style.display = 'none';
    document.removeEventListener('click', startGame);
    document.addEventListener('keydown', jump);
    gameContainer.addEventListener('click', jump);

    

    
}  



document.addEventListener('keydown', jump);

function jump(event) {
  if (event.key === ' ' && !isJumping) {
    isJumping = true;

    jtone.currentTime = 0; // Rewind sound to the beginning
    jtone.play();

    let position = 0;
    const jumpInterval = setInterval(() => {
      if (position >= 120) {  // jumping height here
        clearInterval(jumpInterval);
        const fallInterval = setInterval(() => {
          if (position <= 0) {
            clearInterval(fallInterval);
            isJumping = false;
          } else {
            position -= 8; //  jump speed here
            dino.style.bottom = position + 'px';
          }
        }, 20);
      } else {
        position += 12; //  jump speed here
        dino.style.bottom = position + 'px';
      }
    }, 20);

  }
}



function toggleMute(){
  if (isMuted) {
    bgMusic.play();
    mutebutton.innerHTML = '&#x1F508;';

  }else {
    bgMusic.pause();
    mutebutton.innerHTML = '&#x1F507;' 
    isMuted = !isMuted;
}
}

bgMusic.play().catch(error => {
    console.error('Audio playback error:', error);
  });    

 
           