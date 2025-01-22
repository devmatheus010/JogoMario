const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let isJumping = false;

const jump = () => {
    if (isJumping) return;
    isJumping = true;

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
        isJumping = false;
    }, 500);
};

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        console.log('Pulo detectado!');
        jump();
    }
});

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition > 0 && pipePosition < 120 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

    }
}, 10);

clearInterval(scoreInterval);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});


