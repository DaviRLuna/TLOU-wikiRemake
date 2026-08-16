const Entrar = document.getElementById("entrar");
const CorpoPagina = document.getElementById("corpo");
const BoasVindas = document.getElementById("BoasVindas");
const Audio = document.getElementById("meuAudio");

CorpoPagina.classList.add("class-escondida");

Entrar.addEventListener('click', function(){
    BoasVindas.classList.add("class-escondida");
    CorpoPagina.classList.remove("class-escondida");
    Audio.play();
});