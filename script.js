const telas = document.querySelectorAll('.tela');
const audios = [];

for (let i = 1; i <= 6; i++) {
  audios.push(document.getElementById(`audio${i}`));
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

let currentAudio = null;

function handleScroll() {
  telas.forEach((tela, index) => {
    if (isInViewport(tela)) {
      if (currentAudio !== audios[index]) {
        if (currentAudio) currentAudio.pause();
        currentAudio = audios[index];
        currentAudio.currentTime = 0;
        currentAudio.play();
      }
    }
  });
}

const tela3 = document.querySelector('.tela7');
const containerFinal = document.getElementById('container-coracoes-final');

function criarCoracaoFinal() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.animationDuration = 2 + Math.random() * 3 + 's';
  containerFinal.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

let coracoesFinalSubindo = false;

window.addEventListener('scroll', () => {
  const tela3Top = tela3.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (tela3Top < windowHeight && !coracoesFinalSubindo) {
    coracoesFinalSubindo = true;
    setInterval(criarCoracaoFinal, 300);
  }
});

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
