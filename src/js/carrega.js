$.getJSON('http://ceep.herokuapp.com/cartoes/carregar?callback=?',
      {usuario: 'email@email.com'},
      function (dados) {
        var cartoes = dados.cartoes;
        $.each(cartoes, function(){
            var cartao = this;
            controladorDeCartao.cria(cartao.conteudo, cartao.cor);
        })
      });
