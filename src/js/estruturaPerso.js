const cartoes = document.querySelectorAll(".card");

cartoes.forEach(cartao => {
    cartao.addEventListener('click', function() {
        const Expandido = cartao.classList.contains('extendido-tela');

        cartoes.forEach(c => {
            c.classList.remove('extendido-tela');
            c.classList.remove('escondido');
            c.querySelector('.texto').textContent = "";
        });
        if (!Expandido) {
            cartao.classList.add('extendido-tela');
            cartao.querySelector('.texto').textContent = cartao.dataset.texto;

            cartoes.forEach(c => {
                if (c !== cartao) {
                    c.classList.add('escondido');
                }
            });
        }
    })
})
const div = document.getElementById("caixa");
const Texto = document.getElementById("texto");

/*cartao.addEventListener('click', function() {
    console.log('click')
    if(cartao.classList.contains('cards-perso-extendido')) {
        cartao.classList.remove("cards-perso-extendido");
        Texto.textContent = "";
    } else {
        cartao.classList.add("cards-perso-extendido");
        Texto.textContent = "USHUAIGDVDSFISAJFVHDSBKJFDSBHVSDHGDSKFLKJDGBKJDS";
    }
})*/

