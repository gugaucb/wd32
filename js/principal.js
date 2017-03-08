var botao = document.querySelector('#mudaLayout');
var mural = document.querySelector('.mural');
var botoesRemove = document.querySelectorAll('.opcoesDoCartao-remove');
var formulario = document.querySelector('.novoCartao');

botao.addEventListener('click', mudaLayout);
botao.addEventListener('click', mudaLabelBotao);


function mudaLabelBotao(){
    if(mural.classList.contains('mural--linhas')){
        botao.textContent = 'Blocos';    
    }else{
        botao.textContent = 'Linhas';
    }
}


function mudaLayout(){
    mural.classList.toggle('mural--linhas');
};


for(var i=0; i<botoesRemove.length;i++){
    var botaoRemove = botoesRemove[i];
    botaoRemove.addEventListener('click', function(){
        //this.parentNode.parentNode.remove();
        var botao = this;
        var idCartao = 'cartao_' + botao.dataset.cartao;
        
        var cartao = document.querySelector('#'+idCartao);
        cartao.classList.add('cartao--sumindo');
        setTimeout(function(){
            cartao.remove();
        },400);
    });
}

formulario.addEventListener('submit', salvaNovoCarta);
                            
function salvaNovoCarta(evento){ 
    evento.preventDefault();
    var campoConteudo = document.querySelector('.novoCartao-conteudo');
    var mural = document.querySelector('.mural');
    //var campoConteudo = document.querySelector('[name=novoCartao-conteudo]');
    var digitado = campoConteudo.value;
    var conteudoNovoCartao= document.createElement('p');
    conteudoNovoCartao.textContent  = digitado;
    conteudoNovoCartao.classList.add('cartao-conteudo');
    
    var novoCartao = document.createElement('div');
    novoCartao.classList.add('cartao');
    
    novoCartao.appendChild(conteudoNovoCartao);
    mural.insertBefore(novoCartao, mural.firstElementChild);
}