//função pra dar play no áudio com parâmetro do id de audio
function tocaSom(seletorElemento) {
    const elemento = document.querySelector(seletorElemento); 

    
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

// constante pra criar uma nodelist da classe .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

/*
    loop para dizer que enquanto o contador for menor que o tamanho da nodelist das teclas, executar uma função que quando apertar em uma tecla, executar uma outra função 'tocaSom', que recebe como parametro o id do áudio em que o botão foi apertado.
*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    // template string
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
        if  (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}

