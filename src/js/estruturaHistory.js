const Texto = document.getElementById("texto");
const Imagem = document.getElementById("img");
const Titulo = document.getElementById("titulo");

let ParteHistoria = 0;
let parteAtual;
function verificacao(){
    parteAtual = Historia[ParteHistoria];

    Texto.innerText = parteAtual.texto;
    Imagem.src = parteAtual.imagem;
    Titulo.innerText = parteAtual.titulo;
}
function VerificarParte(){
    if(ParteHistoria >= Historia.length){
        ParteHistoria = 0;
    }
    else if(ParteHistoria <0){
        ParteHistoria = Historia.length;
    }
verificacao()
    
}

const Historia = [
    {
        texto: "A noite em que o mundo acabou marcou a vida de Joel com a perda trágica de sua filha Sarah em Austin, mas vinte anos depois, na opressiva Zona de Quarentena de Boston, sua realidade fria de contrabandista muda ao lado da parceira Tess quando ambos aceitam a missão de Marlene, líder dos Vagalumes, para retirar dali uma jovem de catorze anos chamada Ellie. O que parecia um transporte de rotina transforma-se na maior jornada da humanidade ao descobrirem que Ellie carrega uma mordida de semanas e é imune ao fungo Cordyceps, mas o plano de entregá-la aos rebeldes fracassa tragicamente no Capitólio, onde encontram os Vagalumes mortos e Tess revela ter sido infectada em um confronto anterior; restando poucos minutos de lucidez, ela se sacrifica em um tiroteio final contra os soldados da FEDRA para cobrir a retirada do grupo, forçando um relutante Joel a assumir sozinho a missão de proteger a garota pelo resto de um país em ruínas.",
        imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr0z0Bl0pX358kmBgX5sjmxY5qykECRXlpX-cepMDOiBjKZG9KmfCs61p9bf-aeoi1ALuRqQXoEPllBffbVHU3HWZMde-AjbDA2_wsFKdCR2L00OvynD_YerBl21ZvqoY2HcE81bL2nEJ2NLws9Dof1ujYL6DnhBjreB9_OtdGlBkqO_i_h7RPkDaiLA/s1366/The_Last_of_Us_S01_E01-19.jpg",
        titulo: "O inicio..."
    },
    {
        texto: "Após o sacrifício de Tess, Joel e Ellie seguem viagem a pé até Lincoln, uma cidade fantasma convertida em uma fortaleza repleta de armadilhas explosivas por Bill, um sobrevivente paranoico e antigo devedor de Joel. O trio se une sob extrema tensão para recuperar uma bateria veicular em uma área isolada e infestada, onde enfrentam hordas de infectados e sobrevivem ao confronto brutal contra um monstruoso Baiacu no ginásio da escola local. A busca toma um rumo sombrio quando encontram o corpo de Frank, o antigo parceiro de Bill que cometeu suicídio após ser mordido, deixando para trás uma carta carregada de amargura que serve como um aviso severo sobre os perigos do isolamento total. Com a bateria instalada e o carro funcionando, eles conseguem empurrar o veículo para fora da zona de perigo, permitindo que Joel e Ellie partam pela estrada rumo ao oeste, enquanto Bill permanece sozinho em sua solidão fortificada.",
        imagem: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2023/01/23/bill-town-s102ssgjd0l2.jpg",
        titulo: "Cidade do Bill..."
    },
    {
        texto: "A jornada rumo ao oeste é abruptamente interrompida em Pittsburgh, onde Joel e Ellie caem em uma emboscada violenta armada por caçadores locais, forçando-os a abandonar o carro e lutar pela sobrevivência nas ruas hostis de uma cidade sem lei. Enquanto tentam escapar do território inimigo e do patrulhamento de um veículo blindado, os dois encontram Henry e seu irmão mais novo, Sam, dois sobreviventes que também buscam uma rota de fuga. O quarteto une forças em uma travessia tensa pelos esgotos infestados de infectados e por um subúrbio vigiado por um atirador de elite, conseguindo finalmente alcançar a segurança temporária de uma torre de rádio abandonada. No entanto, a esperança se desfaz na manhã seguinte: Sam, que havia sido arranhado na perna durante a fuga e escondeu o ferimento, acorda completamente transformado pelo fungo e ataca Ellie. Em um estalo de puro desespero e culpa, Henry atira no próprio irmão para salvar a garota e, devastado pelo horror do que acabou de fazer, aponta a arma contra a própria cabeça e puxa o gatilho na frente de Joel, encerrando o capítulo de forma brutal.",
        imagem: "https://neo-geocd.com/wp-content/uploads/2014/01/tlou2.jpg",
        titulo: "Pittsburgh..."
    },
    {
        texto: "Meses após a tragédia de Sam e Henry, o outono chega e leva Joel e Ellie até o condado de Jackson, Wyoming, onde encontram uma represa hidrelétrica fortificada que fornece energia para uma próspera comunidade local. Para a surpresa de Joel, o local é liderado por seu irmão Tommy e a esposa Maria, um reencontro marcado por abraços, mas que logo desperta velhas feridas e ressentimentos do passado violento que ambos compartilharam. Sentindo o peso da responsabilidade e com medo de falhar com Ellie assim como falhou com Sarah, Joel tenta secretamente passar a custódia da garota para Tommy, que conhece o paradeiro dos Vagalumes, mas a conversa é interrompida por um ataque violento de bandidos que tentam sabotar as turbinas da represa. Após repelirem os invasores, Ellie descobre o plano de rejeição de Joel e foge a cavalo até uma fazenda abandonada nas proximidades, onde os dois confrontam seus traumas em uma discussão dolorosa sobre perda e confiança. Tocada pela lealdade da garota e compreendendo que o vínculo entre eles é inquebrável, Joel muda de ideia no último segundo, despede-se de Tommy e decide seguir ele mesmo com Ellie rumo à universidade em busca da cura.",
        imagem: "https://i.pinimg.com/736x/e3/62/20/e3622095719416288db84b7dc319c6b2.jpg",
        titulo: "Represa do Tommy..."
    },
    {
        texto: "Montados no cavalo Callus, Joel e Ellie chegam à Universidade do Leste do Colorado sob as cores douradas do outono, encontrando o outrora imponente campus transformado em um deserto de folhas secas abandonado pela FEDRA. O local serve agora como ninho para infectados, incluindo perigosos Estaladores ocultos nos dormitórios acadêmicos, que a dupla precisa confrontar enquanto rastreia os espelhos de sinalização e os símbolos dos Vagalumes deixados nas paredes. Ao alcançarem o laboratório principal de ciências no topo do edifício, a esperança de encontrar os cientistas se transforma em frustração ao descobrirem apenas corpos e gravações gravadas em gravadores de áudio, revelando que o grupo rebelde evacuou o campus às pressas em direção a um hospital em Salt Lake City após um acidente com os macacos de laboratório infectados. A investigação é interrompida abruptamente pela invasão de um grupo violento de caçadores armados, forçando Joel e Ellie a uma fuga desesperada pelos corredores do prédio. Durante o confronto físico com um dos invasores, Joel é empurrado de uma balaustrada e cai de uma altura considerável, sendo empalado na queda por uma barra de metal exposta que perfura gravemente o seu abdómen. Ellie consegue arrastá-lo para fora do edifício sob uma chuva de tiros e, com extrema dificuldade, o coloca sobre o cavalo, assumindo pela primeira vez a liderança total da jornada para protegê-lo enquanto o inverno rigoroso começa a dar os seus primeiros sinais.",
        imagem: "https://meups.com.br/wp-content/uploads/2021/11/Serie-de-The-Last-of-Us-9-900x503.jpg",
        titulo: "Universidade do colorado..."
    },
    {
        texto: "O inverno rigoroso encontra Joel à beira da morte em uma cabana isolada e Ellie caçando nas florestas nevadas para alimentá-los, onde ela abate um cervo e cruza o caminho de David e James, dois sobreviventes que oferecem remédios em troca da carne. Após repelirem juntos uma horda de infectados em uma fábrica abandonada, Ellie consegue o antibiótico para salvar Joel, mas logo descobre que o grupo de David é, na verdade, uma comunidade de canibais violentos e que eles são os mesmos caçadores que atacaram a universidade. Rastreando o rastro de sangue, os homens de David cercam o esconderijo e capturam Ellie após uma perseguição a cavalo, prendendo-a em uma gaiola onde David revela suas intenções sombrias de integrá-la ao grupo ou transformá-la em comida. Enquanto isso, Joel desperta de seu delírio graças aos medicamentos, tortura dois capangas para descobrir o paradeiro de sua protegida e rasteja pela nevasca em direção ao vilarejo inimigo, tomado por um instinto paternal violento. O arco atinge seu clímax em um restaurante em chamas, onde Ellie usa de extrema agilidade para escapar de David e, em um ato de puro desespero e trauma, o mata a golpes de facão pouco antes de Joel invadir o local para resgatá-la, abraçando-a com força enquanto ela desaba em lágrimas em meio às cinzas.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_k_Qtcm_xD-GPJVU9lFDn8yr_RpJa0LVUvb26n_tyUiO4F31T6WBIxaM&s=10",
        titulo: "Inverno rigoroso..."
    },
    {
        texto: "A primavera floresce sobre as ruínas de Salt Lake City quando Joel e Ellie finalmente alcançam o destino final, um cenário onde o trauma do inverno começa a dissipar-se num momento de pura beleza ao contemplarem um grupo de girafas pastando livremente entre os prédios abandonados. A paz dura pouco; ao tentarem atravessar um túnel rodoviário submerso e infestado de infectados, a correnteza forte de um rio subterrâneo destrói os destroços e Ellie, que não sabe nadar, afoga-se e fica completamente desacordada. Joel consegue retirá-la da água, mas é abruptamente nocauteado por uma patrulha dos Vagalumes e acorda algemado dentro do Hospital Saint Mary, onde Marlene o recebe e revela a terrível verdade sobre a cura: o fungo Cordyceps sofreu mutação no cérebro de Ellie, e a cirurgia para extraí-lo e criar a vacina causará a morte inevitável da garota. Movido pelo amor paternal e pela recusa absoluta de perder outra filha, Joel quebra as restrições, mata os guardas e inicia uma chacina impiedosa pelos corredores do hospital até invadir a sala de cirurgia, onde abate o médico principal e resgata Ellie da mesa de operação. Na garagem do subsolo, ele confronta e executa Marlene para garantir que ninguém os persiga, fugindo de carro em direção a Jackson e, quando Ellie desperta e questiona o que aconteceu, Joel mente friamente, afirmando que os Vagalumes encontraram dezenas de outros imunes e que haviam desistido de procurar uma cura, arrancando dela um 'tudo bem' carregado de uma dúvida silenciosa que muda o destino de ambos para sempre.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnej6SB0DUT9VRpdLoP4brrqQ4JonkKCQ-RgMCWrd2GMF03vkSSqGjrcyu&s=10",
        titulo: "Hospital Saint´s Mary"
    },
    {
        texto: "Três anos após a fuga de Salt Lake City, Joel celebra o aniversário de quinze anos de Ellie levando-a em segredo até um museu de ciências abandonado em Jackson, onde a luz do sol corta os tetos partidos para iluminar exibições de dinossauros e a ala espacial que tanto fascina a garota. O ponto alto do dia acontece quando Joel revela um velho capacete de astronauta resgatado e a tranca dentro de uma cápsula Apollo de exibição, ligando um gravador de fita cassete com o áudio real do lançamento da Apollo 11; de olhos fechados e sentindo a estrutura vibrar pelas mãos de Joel, Ellie flutua para longe da miséria do apocalipse, esquecendo por alguns minutos o peso do seu sangue imune. Ao tirar o capacete com os olhos marejados de lágrimas, ela entrega a Joel um abraço apertado e silencioso, selando uma cumplicidade de pai e filha que faz o contrabandista ter a certeza de que queimaria o mundo inteiro outra vez para proteger aquela inocência, muito antes de as mentiras do hospital começarem a ruir o chão sob os seus pés.",
        imagem: "https://i.pinimg.com/736x/87/04/0f/87040fcf78a90c371fe0ea44485cb28b.jpg",
        titulo: "Fortes lembranças..."
    },
    {
        texto: "Na sequência dos eventos em Salt Lake City, Joel e Ellie tentam reconstruir suas vidas na comunidade de Jackson, mas a relação entre eles permanece fria e distante devido à persistente desconfiança da garota sobre a verdade do hospital. Certo dia, durante uma patrulha sob forte nevasca, Ellie e Dina se abrigam em uma mansão abandonada e compartilham um momento íntimo, ao mesmo tempo em que Abby Anderson é salva de uma horda de infectados por Joel e Tommy, que a conduzem até o refúgio de seu grupo. Descobre-se então que Abby e seus companheiros são ex-integrantes dos Vagalumes vindos de Seattle em busca de vingança, transformando o resgate em uma emboscada cruel onde Ellie, imobilizada e impotente, é forçada a assistir Abby espancar brutalmente Joel até a morte com um taco de golfe. Dominada pelo luto, pela culpa e por uma fúria incontrolável após retornar a Jackson, Ellie decide que irá até o fim do mundo para caçar cada um dos responsáveis, culminando em sua tensa e firme conversa com Maria, a quem ela confronta diretamente para exigir cavalos e suprimentos, determinada a deixar a segurança da cidade e iniciar sua jornada de sangue rumo a Seattle.",
        imagem: "https://img.goodfon.com/wallpaper/big/1/a7/the-last-of-us-the-last-of-us-part-2-tlou-tlou2.webp",
        titulo: "O começo do fim..."
    },
    {
        texto: "O primeiro dia de Ellie em Seattle começa com a chegada tensa à cidade ao lado de Dina, explorando os escombros da Zona Quarentena e o metrô infestado antes de encontrarem um refúgio seguro em um teatro abandonado. Após Dina passar mal e revelar que está grávida, Ellie decide prosseguir sozinha pela cidade devastada e infestada por infectados e soldados hostis da WLF (Frente de Libertação de Washington), rastreando pistas que a levam até o grupo de Abby. Ao longo do dia, ela explora locais icônicos como o tribunal e o canal, e acaba sendo capturada em uma armadilha, o que a força a matar seu primeiro humano daquela jornada e lidar com o peso moral disso, culminando no retorno ao teatro onde ela finalmente revela a gravidez de Dina para Jesse, que acaba de chegar à cidade para ajudá-las.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHj1_V_i6ai5qT89UyLBdDTR9-siXqbEWO_WSngereq0StVn3lOR0Wfs&s=10",
        titulo: "Dia I- Ellie"
    },
    {
        texto: "O primeiro dia de Abby em Seattle começa sob tensão na base dos Lobos (WLF), onde ela descobre que o líder Isaac planeja uma invasão massiva contra os Cicatrizes (Serafitas) e que seu amigo Owen sumiu após um incidente. Determinada a encontrá-lo, Abby quebra as regras e parte com Mel e Manny pelas ruínas da cidade, mas o trio é emboscado por Serafitas e capturado em um canteiro de obras abandonado. Após uma fuga frenética pela floresta, Abby acaba separada de seus aliados e cai nas mãos dos cultistas, sendo salva de forma inesperada por Yara e Lev, dois irmãos fugitivos daquela seita. Ela retribui o favor ajudando a tratar os ferimentos graves de Yara e os esconde em um local seguro antes de finalmente conseguir chegar ao aquário costeiro, onde reencontra Owen e confronta os segredos do grupo, encerrando o dia dividida entre a lealdade à sua facção e o dever moral de proteger os novos aliados.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt75wnQWX_nHr6_XS0DqIipW4r3-idOQIA0_-2RI_MhpRSK0I17ew1Fysy&s=10",
        titulo: "Dia I- Abby"
    },
    {
        texto: "O primeiro dia de Abby em Seattle começa sob tensão na base dos Lobos (WLF), onde ela descobre que o líder Isaac planeja uma invasão massiva contra os Cicatrizes (Serafitas) e que seu amigo Owen sumiu após um incidente. Determinada a encontrá-lo, Abby quebra as regras e parte com Mel e Manny pelas ruínas da cidade, mas o trio é emboscado por Serafitas e capturado em um canteiro de obras abandonado. Após uma fuga frenética pela floresta, Abby acaba separada de seus aliados e cai nas mãos dos cultistas, sendo salva de forma inesperada por Yara e Lev, dois irmãos fugitivos daquela seita. Ela retribui o favor ajudando a tratar os ferimentos graves de Yara e os esconde em um local seguro antes de finalmente conseguir chegar ao aquário costeiro, onde reencontra Owen e confronta os segredos do grupo, encerrando o dia dividida entre a lealdade à sua facção e o dever moral de proteger os novos aliados.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt75wnQWX_nHr6_XS0DqIipW4r3-idOQIA0_-2RI_MhpRSK0I17ew1Fysy&s=10",
        titulo: "Dia II- Ellie"
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