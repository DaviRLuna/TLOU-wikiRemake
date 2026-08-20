const Entrar = document.getElementById("entrar");
const CorpoPagina = document.getElementById("corpo");
const BoasVindas = document.getElementById("BoasVindas");
const Audio = document.getElementById("meuAudio");

CorpoPagina.classList.add("class-escondida");

let time = 2000;
let currentImageIndex = 0;
const img = document.querySelectorAll("#img img");
max = img.length;

function nextImage() {
    if(currentImageIndex === max) {
        currentImageIndex = 0;
        img[currentImageIndex].classList.add("visible");}
    img[currentImageIndex].classList.remove("visible");
    currentImageIndex++;
    console.log(currentImageIndex);
    img[currentImageIndex].classList.add("visible");
}



function start(){
    setInterval(() => {
        nextImage();
    }, time);
}

Entrar.addEventListener('click', function(){
    console.log('entrou');
    BoasVindas.classList.add("class-escondida");
    CorpoPagina.classList.remove("class-escondida");
    Audio.play();
    start();
});

