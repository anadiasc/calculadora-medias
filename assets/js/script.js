let totalMedia = 0;

// capturando os valores dos inputs
const nota_linguagens = document.querySelector('#linguagens');
const nota_humanas = document.querySelector('#humanas');
const nota_natureza = document.querySelector('#natureza');
const nota_matematica = document.querySelector('#matematica');
const nota_redacao = document.querySelector('#redacao');
// capturando o button
const buttonCalcular = document.querySelector('.buttonCalcular');

// definindo função média aritmética
let i = 0;
buttonCalcular.addEventListener('click', function click(e){
    i++;
    console.log(i);
    mediaAritmetica();
    buttonCalcular.removeEventListener('click', click);
});

function mediaAritmetica(){
    const linguagens = Number(nota_linguagens.value);
    const humanas = Number(nota_humanas.value);
    const natureza = Number(nota_natureza.value);
    const matematica = Number(nota_matematica.value);
    const redacao = Number(nota_redacao.value);

    const soma = linguagens + natureza + humanas + matematica + redacao;
    const media = soma / 5;

    totalMedia = media.toFixed(2); //.toFixed é usado para mostrar resultados numéricos com um determinado nº de casas decimais 
    adicionarResultado();
};

// definindo função adicionar resultado

const resultado = document.querySelector('.output-resultado');

function adicionarResultado(){
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.innerText = `Média`;
    p.innerText = `${totalMedia}`;

    li.appendChild(h3);
    li.appendChild(p);
    
    resultado.appendChild(li);
};