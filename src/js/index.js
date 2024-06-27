/*
Obj 1 - quando clicarmos na seta de avançar temos que mostar o proximo cartao da lista
- passo 1 = dar um jeito de pegar o elemento html da seta avançar*/
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar'); //pas 1 = dar um jeito de pegar o elemento html da seta voltar
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao'); //passo 3

/*passo 2 = dar um jeito de identificar o clique do usuário na seta avançar*/
btnAvancar.addEventListener('click', function (){

    if (cartaoAtual === cartoes.length - 1) return;
    //passo 4 = buscar o cartão que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');

    //passo 3 = fazer aparecer o próximo cartão da lista e colocando o cartao selecionado nele
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado');

    
});


//Obj 2 - quando clicarmos na seta de voltar temos que mostar o cartao anterios da lista
//pas 2 = dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener('click', function (){

    if (cartaoAtual === 0) return;
    //pas 4 = buscar o cartão que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');

    //pas 3 = fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add('selecionado');

    
});