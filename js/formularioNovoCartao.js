$('.novoCartao').submit(salvaNovoCarta);
 
 

function salvaNovoCarta(evento){ 
    evento.preventDefault();
    
    
    var campoConteudo = $('.novoCartao-conteudo');
    var digitado = campoConteudo.val().trim().replace(/\n/g,'<br>');
    controladorDeCartao.cria(digitado);
    $('.mural').trigger('precisaSincronizar');
    campoConteudo.val('').focus();
}