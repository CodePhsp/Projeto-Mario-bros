const botaoTrailer = document.querySelector('.botao-trailer');
const modalTrailer = document.querySelector('.modal');
const botaoFecharTrailer = document.querySelector('.fechar-modal');

botaoTrailer.addEventListener('click', () => {
    modalTrailer.classList.add('aberto')
});

botaoFecharTrailer.addEventListener('click', () => {
    modalTrailer.classList.remove('aberto')
});