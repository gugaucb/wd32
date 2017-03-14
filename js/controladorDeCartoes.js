
var controladorDeCartao = (function(){
var numeroDeCartoes = $('.cartao').length;

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
    
                                     
function removeCartao(){
        //this.parentNode.parentNode.remove();
        var botao = $(this);
      //  var idCartao = 'cartao_' + botao.data('cartao');
        
        //var cartao = $('#'+idCartao).addClass('cartao--sumindo');
        var cartao = botao.closest('.cartao').addClass('cartao--sumindo');
        setTimeout(function(){
            cartao.remove();
            $('.mural').trigger('precisaSincronizar');
        },400);
    }
return{
    cria: criaCartao
}
}
)();