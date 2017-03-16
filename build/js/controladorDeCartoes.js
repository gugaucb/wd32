
var controladorDeCartao = (function(){
var numeroDeCartoes = 0;
var template = $('#cartoes-template').html();
Mustache.parse(template);
var codigoTimeout
$('.mural').on('click','.opcoesDoCartao-remove', removeCartao)
           .on('input', '.cartao-conteudo', function(){
                        //Debounce Pattern
                        clearTimeout(codigoTimeout);
                        codigoTimeout = setTimeout(function(){
                            $('.mural').trigger('precisaSincronizar');
                        },1000)
                               
                       })
           .on('change', '.opcoesDoCartao-radioCor', function(){
                var origem = $(this);
                if(origem.is('.opcoesDoCartao-radioCor')){
                    origem.closest('.cartao').css('background-color',origem.val());
                $('.mural').trigger('precisaSincronizar');
            }
            
        });    
    
function criaCartao(digitado, cor, finalidade){
      
    
    if(digitado){
                   var tipoCartao = decideTipoCartao(digitado)

                    numeroDeCartoes++;
                    var cores = [
            { nome: 'Padrao', codigo: '#EBEF40' },
            { nome: 'Importante', codigo: '#F05450' },
            { nome: 'Tarefa', codigo: '#92C4EC' },
            { nome: 'Inspiracao', codigo: '#76EF40' }
        ];

            var contexto = {
                cartao: {
                    id: 'cartao_'+ numeroDeCartoes,
                    tipo: tipoCartao,
                    cor: cor,
                    conteudo: digitado
                },
                cores: cores
            };
            var renderizado = Mustache.render(template, contexto);
            $('.mural').prepend(renderizado);

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
            
            if(cartao.data('finalidade') != 'ajuda'){
                $('.mural').trigger('precisaSincronizar');
            }
            cartao.remove();
        },400);
    }

    
    
return{
    cria: criaCartao
}
}
)();