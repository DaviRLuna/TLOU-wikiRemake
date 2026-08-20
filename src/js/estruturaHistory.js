const Texto = document.getElementById("texto");
const Imagem = document.getElementById("img");

let ParteHistoria = 0;

function VerificarParte(){
    let parteAtual = Historia[ParteHistoria];

    Texto.innerText = parteAtual.texto;
    Imagem.src = parteAtual.imagem;

    if(parteAtual === Historia.length - 1){
        ParteHistoria = 0;
    }

    
}

const Historia = [
    {
        texto: "O início de The Last of Us acompanha a trágica transformação de Joel e o início de sua jornada de redenção ao lado de Ellie, em uma narrativa dividida entre o colapso do mundo e a busca por esperança. Em 2013, o surto devastador do fungo Cordyceps destrói a vida de Joel quando sua filha, Sarah, é morta por um soldado durante a fuga caótica. Vinte anos depois, em uma Boston devastada e controlada pela tirania militar da FEDRA, ele sobrevive como um contrabandista frio e amargurado ao lado de sua parceira, Tess. A dinâmica da dupla muda drasticamente quando eles aceitam uma missão de Marlene, líder dos rebeldes Vagalumes: contrabandear a jovem Ellie, de 14 anos, para fora da zona de quarentena em troca de um carregamento de armas roubadas. No caminho, Joel e Tess descobrem que a garota carrega uma mordida antiga e é imune à infecção, tornando-se a potencial chave para a cura da humanidade. O destino do trio é selado no prédio do Capitólio, onde encontram os contatos rebeldes mortos e Tess revela ter sido infectada em um confronto anterior. Ciente de que Ellie é a última esperança do mundo, Tess se sacrifica para atrasar o exército, obrigando Joel a assumir a promessa de levar a garota até o seu irmão, Tommy, iniciando uma das maiores jornadas dos videogames.",
        imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr0z0Bl0pX358kmBgX5sjmxY5qykECRXlpX-cepMDOiBjKZG9KmfCs61p9bf-aeoi1ALuRqQXoEPllBffbVHU3HWZMde-AjbDA2_wsFKdCR2L00OvynD_YerBl21ZvqoY2HcE81bL2nEJ2NLws9Dof1ujYL6DnhBjreB9_OtdGlBkqO_i_h7RPkDaiLA/s1366/The_Last_of_Us_S01_E01-19.jpg"
    },
    {
        texto: "A jornada para a Cidade do Bill começa com Joel e Ellie viajando até a cidade isolada de Lincoln com o objetivo de encontrar Bill, um contrabandista altamente paranoico que deve favores a Joel, para conseguir uma bateria de carro e cruzar o país. Ao entrarem no território, a dupla precisa navegar por um labirinto de armadilhas mortais, fios de tropeço e explosivos que Bill espalhou pelas ruas para conter o avanço dos infectados. Após Joel ficar preso de cabeça para baixo em uma dessas armadilhas enquanto enfrenta uma horda de criaturas, Bill aparece para resgatá-los e os leva para o seu esconderijo fortificado, onde avisa agressivamente que conseguir um veículo funcional é quase impossível. Uma parceria forçada é firmada para invadir uma escola abandonada onde há peças militares, resultando em um confronto brutal contra o primeiro Vermelhento (Bloater), uma mutação gigante e perigosa do fungo. Na fuga, o trio se esconde em uma casa próxima e descobre o corpo de Frank, o antigo parceiro de Bill, que cometeu suicídio após ser mordido e deixou um bilhete revelando que preferia morrer a aguentar a paranoia de Bill. Após recuperarem a bateria que Frank havia escondido no carro de fuga, Joel e Ellie empurram o veículo para dar partida no tranco sob fogo cruzado de infectados, despedem-se de um Bill amargurado e partem sozinhos em direção a Pittsburgh, marcando o início de uma cumplicidade mais leve entre os dois.",
        imagem: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2023/01/23/bill-town-s102ssgjd0l2.jpg"
    },
    {
        texto: "A violenta emboscada dos Caçadores em Pittsburgh destrói o carro de Joel e Ellie, forçando-os a fugir pelas ruínas da cidade e a se aliarem aos irmãos Henry e Sam em uma travessia desesperada que termina na maior tragédia da primeira metade do jogo. Após colidirem o veículo e eliminarem os primeiros criminosos humanos em um combate frenético onde Ellie salva a vida de Joel pela primeira vez, a dupla se junta aos irmãos para escapar dos jipes blindados e patrulhas, cruzando esgotos infestados de criaturas e sobrevivendo a um cerco de atiradores de elite no subúrbio. O quarteto finalmente alcança a segurança de uma torre de rádio externa, mas o destino do grupo é tragicamente selado porque o jovem Sam esconde de todos que foi mordido na perna durante a fuga e, na manhã seguinte, acorda totalmente transformado em infectado e ataca Ellie de forma selvagem. Tomado pelo choque absoluto e pelo puro instinto de proteção, Henry atira e mata o próprio irmão caçula para salvar a garota e, imediatamente consumido por uma culpa devastadora e pelo luto insuportável de ter tirado a vida de quem jurou proteger, aponta a arma contra a própria cabeça e comete suicídio na frente de Joel e Ellie, deixando um silêncio brutal e doloroso que marca profundamente os protagonistas pelo resto da viagem.",
        imagem: "https://neo-geocd.com/wp-content/uploads/2014/01/tlou2.jpg"
    },
    {
        texto: "Ao chegar à comunidade fortificada de Wyoming, Joel reencontra seu irmão Tommy e, assustado com a responsabilidade e com medo de falhar, tenta transferir a missão de escoltar Ellie para ele, o que magoa profundamente a garota e gera uma forte discussão sobre as perdas do passado de ambos; no entanto, após defenderem o local de um ataque de saqueadores e Ellie fugir, Joel percebe o laço inquebrável entre eles, desiste de abandoná-la e decide seguir com ela até a universidade. Ao explorarem o campus em busca dos laboratórios dos Vagalumes, eles descobrem que os cientistas abandonaram o local e se mudaram para Salt Lake City, mas, antes de conseguirem partir, são emboscados por bandidos e, durante o confronto, Joel é empurrado de uma sacada e cai em cima de um vergalhão de ferro que atravessa seu abdômen, deixando-o gravemente ferido e forçando Ellie a arrastá-lo em uma fuga desesperada antes que ele desmaie no chão congelado, assumindo sozinha a sobrevivência dos dois no inverno que se inicia.",
        imagem: "https://i.pinimg.com/736x/e3/62/20/e3622095719416288db84b7dc319c6b2.jpg"
    },
    {
        texto: "Enquanto cuida de Joel, que está gravemente ferido e delirando em um abrigo congelado, Ellie sai para caçar um cervo e acaba cruzando o caminho de David e seu parceiro James. Inicialmente amigável, David oferece medicamentos em troca da carne do cervo e ajuda Ellie a defender o local de uma horda de infectados, mas o clima muda drasticamente quando ele revela que os homens mortos por Joel na universidade faziam parte do seu grupo. Ellie consegue fugir com os remédios e tratar Joel, mas acaba sendo capturada pelas patrulhas de David, que a leva para o seu assentamento e revela que sua comunidade sobrevive praticando o canibalismo. Recusando-se a se juntar ao grupo e quebrando o dedo de David em uma tentativa de fuga, ela é condenada à morte, mas consegue escapar do açougue bem no momento em que um Joel já recuperado acorda no abrigo, descobre o sumiço da garota e tortura capangas de David para descobrir seu paradeiro. O ápice do capítulo ocorre em um restaurante em chamas, onde Ellie, ferida e aterrorizada, consegue matar David usando um facão em um ato de puro desespero e trauma, sendo amparada logo em seguida por Joel, que a abraça e a conforta no meio da neve, consolidando de vez a relação de pai e filha entre os dois.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_k_Qtcm_xD-GPJVU9lFDn8yr_RpJa0LVUvb26n_tyUiO4F31T6WBIxaM&s=10"
    },
    {
        texto: "Ao chegarem à cidade, Ellie está visivelmente traumatizada pelos eventos do inverno e, enquanto avançam em direção ao hospital, quase morre afogada em um túnel inundado após o colapso de um veículo. Joel tenta reanimá-la, mas ambos são nocauteados por uma patrulha dos Vagalumes. Joel acorda no hospital e é recebido por Marlene, que revela que os médicos já estão preparando Ellie para a cirurgia; no entanto, para remover o fungo mutado e criar a vacina, eles precisam extrair o cérebro da garota, o que a matará. Recusando-se a perder outra filha, Joel quebra o acordo, mata os guardas e invade o centro cirúrgico, assassinando o médico cirurgião principal para resgatar Ellie desacordada. Na fuga pelo estacionamento, ele confronta e mata Marlene para garantir que os Vagalumes não os persigam. O jogo termina nos arredores da comunidade fortificada de Jackson, onde Ellie, desconfiada, confronta Joel sobre o que realmente aconteceu no hospital, e ele jura falsamente que os Vagalumes haviam desistido de procurar uma cura, com Ellie aceitando a mentira com um doloroso e resignado 'Ok'.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIbJ8XzRX3Ef2wRWTqHocbN0gH0_jx51ZIFcevCFLz4VpuXCw7-HrfWe1&s=10"
    }
]

function Avancar(){
    ParteHistoria++;
    window.scrollTo(0, 0);
    VerificarParte();
}
function Retroceder(){
    ParteHistoria--;
    window.scrollTo(0, 0);
    VerificarParte();
}