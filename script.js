const imagens = document.querySelectorAll('.tuka');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;
let pause = false;

function showImage(i) {
    imagens.forEach(img => img.classList.remove('active'));
    imagens[i].classList.add('active');
}

function nextImage() {
    index = (index + 1) % imagens.length;
    showImage(index);
}

function prevImage() {
    index = (index - 1 + imagens.length) % imagens.length;
    showImage(index);
}

prevBtn.addEventListener('click', () => {
    pause = true;
    prevImage();
    resetPause();
});

nextBtn.addEventListener('click', () => {
    pause = true;
    nextImage();
    resetPause();
});

// Adiciona funcionalidade das setas do teclado
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {  // Seta esquerda
        pause = true;
        prevImage();
        resetPause();
    }

    if (event.key === 'ArrowRight') {  // Seta direita
        pause = true;
        nextImage();
        resetPause();
    }

    if (event.key === 'Enter') {  // Enter
        pause = true;
        nextImage();
        resetPause();
    }
});

function resetPause() {
    clearTimeout(pauseTimeout);
    pauseTimeout = setTimeout(() => {
        pause = false;
    }, 10000); // pausa 10s após interação
}

let pauseTimeout;

async function autoSlide() {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        if (!pause) {
            nextImage();
        }
    }
}

showImage(index);
autoSlide();

// Coracoes


const tela2 = document.getElementById('tela2');
const container = document.getElementById('container-coracoes');

function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.animationDuration = 2 + Math.random() * 3 + 's';
    container.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

let coracoesSubindo = false;

window.addEventListener('scroll', () => {
    const tela2Top = tela2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (tela2Top < windowHeight && !coracoesSubindo) {
        coracoesSubindo = true;
        setInterval(criarCoracao, 300);
    }
});

