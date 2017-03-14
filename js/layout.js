
(function(){
 var botao = document.querySelector('#mudaLayout');
var mural = document.querySelector('.mural');



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

})();