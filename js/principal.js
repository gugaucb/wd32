var botao = document.querySelector('#mudaLayout');
var mural = document.querySelector('.mural');
var botoesRemove = document.querySelectorAll('.opcoesDoCartao-remove');


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
        var idCartao = 'cartao_' + this.getAttribute('data-cartao');
        
        var cartao = document.querySelector('#'+idCartao);
        cartao.remove();
    });
}