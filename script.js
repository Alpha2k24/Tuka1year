const telas = document.querySelectorAll('.tela');

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}


const telaFinal = document.querySelector('.tela7');
const containerFinal = document.getElementById('container-coracoes-final');

function criarCoracaoFinal() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.style.left = Math.random() * 100 + 'vw';

  const duracao = 2 + Math.random() * 3;
  coracao.style.setProperty('--duracao', `${duracao}s`);

  containerFinal.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, duracao * 1000 + 1000);
}


let coracoesFinalSubindo = false;

let coracoesIntervalId = null;

window.addEventListener('scroll', () => {
  const rect = telaFinal.getBoundingClientRect();
  if (rect.top < window.innerHeight && !coracoesFinalSubindo) {
    coracoesFinalSubindo = true;
    coracoesIntervalId = setInterval(criarCoracaoFinal, 300);
  }
});

