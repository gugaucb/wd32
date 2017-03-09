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


$('.opcoesDoCartao-remove').click(removeCartao);

                                 
function removeCartao(){
        //this.parentNode.parentNode.remove();
        var botao = $(this);
      //  var idCartao = 'cartao_' + botao.data('cartao');
        
        //var cartao = $('#'+idCartao).addClass('cartao--sumindo');
        var cartao = botao.closest('.cartao').addClass('cartao--sumindo');
        setTimeout(function(){
            cartao.remove();
        },400);
    }

$('.novoCartao').submit(salvaNovoCarta);
 
 var numeroDeCartoes = $('.cartao').length;

function salvaNovoCarta(evento){ 
    evento.preventDefault();
    
    
    var campoConteudo = $('.novoCartao-conteudo');
    var digitado = campoConteudo.val().trim().replace(/\n/g,'<br>');
    if(digitado){
     numeroDeCartoes++;
        var novoCartao = $('<div>').addClass('cartao').attr('id', 'cartao_'+(numeroDeCartoes+1)) ;
        
        var opcoesDoCartao = $('<div>').addClass('opcoesDoCartao').appendTo(novoCartao);
        
        $('<button>').addClass('opcoesDoCartao-opcao opcoesDoCartao-remove').text('Remove').appendTo(opcoesDoCartao).data('cartao',numeroDeCartoes+1).click(removeCartao);
        
        $('<p>').html(digitado).addClass('cartao-conteudo').appendTo(novoCartao);
        novoCartao.prependTo('.mural');
        
    }
    campoConteudo.val('').focus();
}