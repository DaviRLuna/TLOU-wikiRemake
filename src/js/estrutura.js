const Entrar = document.getElementById("entrar");
const CorpoPagina = document.getElementById("corpo");
const BoasVindas = document.getElementById("BoasVindas");
const Audio = document.getElementById("meuAudio");

CorpoPagina.classList.add("class-escondida");

Entrar.addEventListener('click', function(){
    BoasVindas.classList.add("class-escondida");
    CorpoPagina.classList.remove("class-escondida");
    Audio.play();

    start()
});

let time = 2000;
let pastImageIndex = currentImageIndex - 1;
let currentImageIndex = 0;

const img = document.querySelectorAll("#img img");
max = img.length;

function nextImage(){
    currentImageIndex++;
    console.log(currentImageIndex);
    img[currentImageIndex].classList.add("visible")

    img[pastImageIndex].classList.remove("visible")
}

function start(){
    setInterval(() =>{
        nextImage()
    },time)
}

