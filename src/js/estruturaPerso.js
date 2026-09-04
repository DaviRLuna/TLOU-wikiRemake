const cartao = document.getElementById("card");
const div = document.getElementById("caixa");
const Texto = document.getElementById("texto");

cartao.addEventListener('click', function() {
    console.log('click')
    if(cartao.classList.contains('cards-perso-extendido')) {
        cartao.classList.remove("cards-perso-extendido");
        Texto.textContent = "";
    } else {
        cartao.classList.add("cards-perso-extendido");
        Texto.textContent = "USHUAIGDVDSFISAJFVHDSBKJFDSBHVSDHGDSKFLKJDGBKJDS";
    }
})

