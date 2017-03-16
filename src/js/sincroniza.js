$('#sync').click(function(){
    $('.mural').trigger('precisaSincronizar');
})

$('.mural').on('precisaSincronizar', function (){
    console.time('post_ajax');
    $('#sync').removeClass('botaoSync--deuRuim botaoSync--sincronizado');
    $('#sync').toggleClass('botaoSync--esperando');
    
    var cartoes = [];
    $('.cartao').each(function(){
        cartao = {}; 
            
        cartao.conteudo = $(this).find('.cartao-conteudo').text();
        cartao.cor = $(this).css('background-color');
        
        cartoes.push(cartao);
        
    });
    console.log(cartoes);
    var mural = {
        cartoes: cartoes,
        usuario: 'email@email.com'
    }
    
    $.ajax({
        
        url: 'http://ceep.herokuapp.com/cartoes/salvar',
        method:'POST',
        data: mural,
        success: function (resposta){
        //sucesso
            
             $('#sync').addClass('botaoSync--sincronizado');
            console.log(resposta);
            },
        error: function(){
            $('#sync').addClass('botaoSync--deuRuim');
        },
        complete: function (){
             $('#sync').toggleClass('botaoSync--esperando');
            console.timeEnd('post_ajax');
        }
    });
    
    
});