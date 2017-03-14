(function($, cdc){
$('#ajuda').one('click', function (){
   console.time('ajax');
    $.get('http://ceep.herokuapp.com/cartoes/instrucoes', 
        function (dados){
            console.log(dados);
            $.each(dados.instrucoes, function (){
                var cartao = this;
                console.log(cartao);
                cdc.cria(cartao.conteudo, cartao.cor);
            })
        });       
    
    console.timeEnd('ajax');
});
    
})(jQuery, controladorDeCartao);