const Entrar = document.getElementById("entrar");
const CorpoPagina = document.getElementById("corpo");
const BoasVindas = document.getElementById("BoasVindas");
const Audio = document.getElementById("meuAudio");

CorpoPagina.classList.add("class-escondida");

let time = 2000;
let currentImageIndex = 0;
const img = document.querySelectorAll('#img img');
const max = img.length;
console.log(max);

function nextImage() {
    setInterval(() => {
        if(currentImageIndex == max - 1){
            currentImageIndex = 0;
            img[currentImageIndex].classList.add("visible");
        } else{
            img[currentImageIndex].classList.remove("visible");
            console.log(currentImageIndex);
            currentImageIndex++;
            img[currentImageIndex].classList.add("visible");
        }
    }, time)
}



function start(){
    nextImage();
}

Entrar.addEventListener('click', function(){
    console.log('entrou');
    BoasVindas.classList.add("class-escondida");
    CorpoPagina.classList.remove("class-escondida");
    Audio.play();
    start();
});

