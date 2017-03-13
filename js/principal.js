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
    criaCartao(digitado);
    campoConteudo.val('').focus();
}

function criaCartao(digitado, cor){
    cor = cor|| 'yellow';   
    
    if(digitado){
               var tipoCartao = decideTipoCartao(digitado)

                numeroDeCartoes++;
                var novoCartao = $('<div>').addClass('cartao').addClass(tipoCartao).attr('id', 'cartao_'+(numeroDeCartoes+1)).css('background-color', cor) ;
                
                var opcoesDoCartao = $('<div>').addClass('opcoesDoCartao').appendTo(novoCartao);

                $('<button>').addClass('opcoesDoCartao-opcao opcoesDoCartao-remove').text('Remove').appendTo(opcoesDoCartao).data('cartao',numeroDeCartoes+1).click(removeCartao);

                $('<p>').html(digitado).addClass('cartao-conteudo').appendTo(novoCartao);
                novoCartao.prependTo('.mural');

            }

}

function decideTipoCartao(digitado){
    console.time('decideTipoCartao');
    //quebras de linhas
    var quebras = digitado.split('<br>').length-1;
    
    
    //total de letras
    var letras = digitado.replace(/<br>| /g,'').length;
    
    //tamanho da maior palavra
    var maiorPalavra = '';
    var palavras = digitado.replace(/(<br>| )+/g, ' ').split(' ');
//    $.each(palavras, function(){
//        var palavra = this;
//         if(palavra.length > maiorPalavra.length){
//            maiorPalavra = palavra;
//        }
//    });
    
        palavras.forEach(function(palavra){
        if(palavra.length > maiorPalavra.length){
            maiorPalavra = palavra;
        }
    });
//    for(var i=0; i < palavras.length; i++){
//        var palavra = palavras[i];
//        if(palavra.length > maiorPalavra.length){
//            maiorPalavra = palavra;
//        }
//    }
    
    if(quebras < 5 && letras < 55 && maiorPalavra.length < 9){
        return 'cartao--textoGrande';
    }else if(quebras < 6 && letras < 75 && maiorPalavra.length < 12){
        return 'cartao--textoMedio';
    }else{
        return 'cartao--textoPequeno';
    }
   
    
    console.timeEnd('decideTipoCartao');
}

$('#busca').on('input', function(){
    var digitado = $(this).val().trim();
    
    var regex = new RegExp(digitado, 'i');
    
    $('.cartao').hide().filter(function(){
        var conteudo = $(this).find('.cartao-conteudo').text();
        return regex.test(conteudo); 
    }).show();
});

$('#ajuda').one('click', function (){
   console.time('ajax');
    $.get('http://ceep.herokuapp.com/cartoes/instrucoes', 
        function (dados){
            console.log(dados);
            $.each(dados.instrucoes, function (){
                var cartao = this;
                console.log(cartao);
                criaCartao(cartao.conteudo, cartao.cor);
            })
        });       
    
    console.timeEnd('ajax');
});