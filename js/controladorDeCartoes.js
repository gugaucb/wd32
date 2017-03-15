
var controladorDeCartao = (function(){
var numeroDeCartoes = $('.cartao').length;

function criaCartao(digitado, cor, finalidade){
      
    
    if(digitado){
               var tipoCartao = decideTipoCartao(digitado)

                numeroDeCartoes++;
                var novoCartao = $('<div>').addClass('cartao').addClass(tipoCartao).attr('id', 'cartao_'+(numeroDeCartoes+1)).data('finalidade', finalidade).css('background-color', cor) ;
                
                var opcoesDoCartao = $('<div>').addClass('opcoesDoCartao').appendTo(novoCartao);
               

                $('<button>').addClass('opcoesDoCartao-opcao opcoesDoCartao-remove').text('Remove').appendTo(opcoesDoCartao).data('cartao',numeroDeCartoes+1).click(removeCartao);
        
        opcoesDeCoresDoCartao('cartao_'+(numeroDeCartoes+1)).appendTo(opcoesDoCartao);
        
                var codigoTimeout;
                $('<p>').html(digitado)
                    .addClass('cartao-conteudo')
                    .appendTo(novoCartao)
                    .attr('contenteditable',true)
                    .on('input', function(){
                        //Debounce Pattern
                        clearTimeout(codigoTimeout);
                        codigoTimeout = setTimeout(function(){
                            $('.mural').trigger('precisaSincronizar');
                        },1000)
                               
                       });
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
            
            if(cartao.data('finalidade') != 'ajuda'){
                $('.mural').trigger('precisaSincronizar');
            }
            cartao.remove();
        },400);
    }
function opcoesDeCoresDoCartao(idDoCartao) {
	var cores = [
		{ nome: 'Padrao', codigo: '#EBEF40' },
		{ nome: 'Importante', codigo: '#F05450' },
		{ nome: 'Tarefa', codigo: '#92C4EC' },
		{ nome: 'Inspiracao', codigo: '#76EF40' }
	];

	var opcoesDeCor = $('<div>').addClass('opcoesDoCartao-cores');

	$.each(cores, function () {
		var cor = this;

		var idRadioCor = 'cor' + cor.nome + '-' + idDoCartao;

		var radioCor = $('<input>')
			.addClass('opcoesDoCartao-radioCor')
			.val(cor.codigo)
			.attr({ //setando varios atributos de uma única vez
				type: 'radio',
				id: idRadioCor,
				name: 'corDoCartao' + idDoCartao
			});
        

		var labelRadioCor = $('<label>')
			.addClass('opcoesDoCartao-opcao opcoesDoCartao-cor')
			.text(cor.nome)
			.css('color', cor.codigo)
			.attr('for', idRadioCor);

		opcoesDeCor.append(radioCor).append(labelRadioCor);
	});
    
    opcoesDeCor.on('change', function(e){
                var origem = $(e.target);
            if(origem.is('.opcoesDoCartao-radioCor')){
                origem.closest('.cartao').css('background-color',origem.val());
            $('.mural').trigger('precisaSincronizar');
            }
            
        });

	return opcoesDeCor;
}    
    
    
return{
    cria: criaCartao
}
}
)();