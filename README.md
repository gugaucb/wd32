# wd32

Curso WD32

Emmet plugin

Reset CSS

padding - da borda até o conteudo. Faz parte do objeto.
margin - da borda para fora

cria 5 divs com a classe cartao com um paragrafo escrito lorem:

div.cartao*5>p.cartao-conteudo>lorem

tela disponível

meta:vp

<meta name="viewport" content="width=device-width">

device-width: adota a melhor resolução para o dispositivo móvel

ctrl+shift+a - envolver varios elementos

padding: 0 10%; --> 0 top e bottom e 10 left e right

display.block - não aceita vizinho

display.inline - aceita vizinhos mas nãão respeita width

display: inline-block - aceita vizinhos e respeita width

content-box = padding + width do conteudo

box-sizing: border-box; faz com que o tamanho do cartãão seja 190 - padding.

display: flex; coloca tudo na mesma linha

flex-wrap: wrap; modifica o display flex para permitir que seja utilizado mais de uma linha

flex-grow: 1; respeita a largura mas se der ele cresce o objeto para utilizar o espaço

flex-basis: 190px; define o tamanho do elemento do flex.

caniuse.com -- ver o que pode ser usar em termos de CSS

cssguidelin.es

tipos javaScript

number

undefined

string

boolean

function

object

button#mudaLayout{Linhas} - cria botao com id mudaLayout com o texto Linhas

form.container.novoCartao - cria um formulario

textarea.novoCartao-conteudo[placeholder="Digite aqui"] - criar um textarea com placeholder

input:submit.novoCartao.salvar[value="Salvar"]

- cria cartão submit com o nome salvar

pai.appendChild - acrescenta como último filho.

pai.insertBefore(filho, irmao) - acrescenta antes do irmão informado.

EventListener

Click

Dblclick

Mousedown

Mouseup

Mouseenter

Mouseover

Mousemove

Mouseleave

Mouseout

Keyup

Keydown

Keypress

Paste

Input

Bit.ly/wd47-eventos

https://css-tricks.com/snippets/css/a-guide-to-flexbox/



http://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.2.1/mustache.js

https://gist.github.com/alexandreaquiles/9856c420ae098ffcc7ddfd6aa3031519

https://gist.github.com/alexandreaquiles/2b891bbfb133599db05c


http://todomvc.com/

http://try.jquery.com/

NPM - Node Package Management

npm install gulp (local)

npm install -g gulp (global - permite executar o gulp do terminal)

nvn - node version manager ( permite instalar varias versões do node na mesma maquina)

npm link gulp (cria um link na pasta do projeto para a instalação global)

gulp <nome da tarefa> (executa uma task descrita no gulpfile.js (equivalente ao pom.xml))


npm init (cria o arquivo package.json) - para salvar as versões das bibliotecas que estão sendo usadas.


22 requests
1.2 Kbytes
15 s


chrome e firefox faz 6 conexões simultaneas.
IE 10 - 8 conexoes simultaneas.



instala a plugin 'del' e guarda no package.json. O -dev define que o plugin é só para ambiente de desenvolvimento.

npm install del --save-dev 

instala plugin que acrescenta os prefixos de css necessários para manter compatibilidade com browser antigos.
npm install gulp-autoprefixer --save-dev
site: https://github.com/postcss/autoprefixer/blob/master/README.md

https://github.com/ai/browserslist - prefixo dos browser

Concatenação
gulp-usemin

Minificação
gulp-uglify
gulp-minify-css

