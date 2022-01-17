/**
 * const notas = {
    natureza: 0,
    humanas: 0,
    linguagens: 0,
    matematica: 0,
    redacao: 0
};

 */


// capturando valores dos inputs
const natureza = document.querySelector('.natureza');
const humanas = document.querySelector('.humanas');
const linguagens = document.querySelector('.linguagens');
const matematica = document.querySelector('.matematica');
const redacao = document.querySelector('.redacao');

// função média aritmética:
const buttonAritmetica = document.querySelector('.buttonAritmetica')

buttonAritmetica.addEventListener('click', mediaAritmetica);

function mediaAritmetica(){
    const notaNatureza = Number(natureza.value);
    const notaHumanas = Number(humanas.value);
    const notaLinguagens = Number(linguagens.value);
    const notaMatematica = Number(matematica.value);
    const notaRedacao = Number(redacao.value);

    soma = notaHumanas + notaNatureza + notaLinguagens + notaMatematica + notaRedacao;
    media = soma / 5;
};

// função média ponderada:
function mediaPonderada(){
    const notaNatureza = Number(natureza.value);
    const notaHumanas = Number(humanas.value);
    const notaLinguagens = Number(linguagens.value);
    const notaMatematica = Number(matematica.value);
    const notaRedacao = Number(redacao.value);

    const pesoNatureza = Number(natureza.value);
    const pesoHumanas = Number(humanas.value);
    const pesoLinguagens = Number(linguagens.value);
    const pesoMatematica = Number(matematica.value);
    const pesoRedacao = Number(redacao.value);    
};