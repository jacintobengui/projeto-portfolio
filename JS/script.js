let btnSobre = document.querySelector('#btnSobre');
let btnTecnologias = document.querySelector('#btnTecnologias');
let btnReview = document.querySelector('#btnReview');

let opcao1 = document.querySelectorAll('.opcao')[0];
let opcao2 = document.querySelectorAll('.opcao')[1];
let opcao3 = document.querySelectorAll('.opcao')[2];

    opcao1.style='display: block';
    opcao2.style='display: none';
    opcao3.style='display: none';

btnSobre.addEventListener('click', () => {
    opcao1.style='display: block';
    opcao2.style='display: none';
    opcao3.style='display: none';
});

btnTecnologias.addEventListener('click', () => {
    opcao2.style='display: block';
    opcao1.style='display: none';
    opcao3.style='display: none';
});

btnReview.addEventListener('click', () => {
    opcao3.style='display: block';
    opcao1.style='display: none';
    opcao2.style='display: none';
});

