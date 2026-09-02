
const Audio = document.getElementById("meuAudio");
const imagem = document.getElementById("img");

let time = 2000;
let currentImageIndex = 0;
let ImagemAtual

function verificarParte(){
    if(currentImageIndex >= Imagens.length){
        currentImageIndex = 0;
    }

    ImagemAtual = Imagens[currentImageIndex];
    imagem.src = ImagemAtual.Imagem;
    currentImageIndex++;
}

const Imagens = [
    {
        Imagem: "https://levelingupyourgame.com/wp-content/uploads/2020/06/The-Last-of-Us-2-Review-Graphics-Scenery-and-Visuals-3-1024x427.jpg"
    },
    {
        Imagem: "https://images2.alphacoders.com/784/thumb-1920-784000.jpg"
    },
    {
        Imagem: "https://c4.wallpaperflare.com/wallpaper/362/829/247/the-last-of-us-video-games-ruin-concept-art-apocalyptic-artwork-horse-digital-art-wallpaper-preview.jpg"
    },
    {
        Imagem: "https://p4.wallpaperbetter.com/wallpaper/650/228/911/postapocalyptic-artwork-lakes-1920x1080-nature-lakes-hd-art-wallpaper-preview.jpg"
    },
    {
        Imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO52de1Fh_7thSYvrORTII7N_lhjVhIQmsGa7fsrQ595csjScHD7maVqW6&s=10"
    },
    {
        Imagem: "https://i.pinimg.com/736x/99/5f/13/995f13f038e1c3992ea44bae0718f3a3.jpg"
    },
    {
        Imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqDmzciPl1R6fAvifTtOVspOUNIIJ5FH5cOQTWMBIaAC9erLXkQVbH-0&s=10"
    },
    {
        Imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlz8Wy7d78V-zAdnC4hKzwm3ZNC9_dXTzzAgejCq1FQryonWR24ucVaao&s=10"
    },
    {
        Imagem: "https://images7.alphacoders.com/132/1326068.jpeg"
    }
]

function IniciarImagens(){
    verificarParte();
    setInterval(verificarParte, time);
}
    IniciarImagens();


Audio.play();

