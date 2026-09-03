const cartao = document.getElementById("card");

cartao.addEventListener('click', function() {
    console.log('click')
    if(cartao.classList.contains('cards-perso-extendido')) {
        cartao.classList.remove("cards-perso-extendido");
        console.log('voltou')
    } else {
        cartao.classList.add("cards-perso-extendido");
        console.log('foi')
    }
})