const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Você prefere jogar em qual área no futebol",
    alternativas:[
        {
        texto:"Na parte defensiva ",
        afirmacao:"Você seria um volante, zagueiro, até mesmo um lateral defensivo."
        },
        {
       texto:"Na parte ofensiva",
       afirmacao:"Você seria um atacante, pontas ou até mesmo um meio campo ofensivo."
        }

    ]
},

{
    
        enunciado: "Qual é seu estilo de jogo favorito?",
        alternativas:[{
            texto:"Marcar e roubar a bola",
            afirmacao:"você tem um perfil para ser um volante ou lateral com boa marcação."
        },
        {        
           texto:"Criar jogadas e passes",
           afirmacao:"Você se encaixa como meia amador, dono da criatividade do time. "
        }        
        ]
    },
    

    {
    
        enunciado: "Você prefere jogar perto do gol adversario ou do seu gol?",
        alternativas:[
            {
            texto:"Perto do gol adversário",
            afirmacao:"Você é um atacante nato, sempre buscando gol."
            },
            {
            texto:"perto do meu gol",
            afirmacao:"Você é um defensor confiável, importante para proteger o time."
            }
        ]
    },
    
    {
    
        enunciado: "O que você mais valoriza em um jogo?",
        alternativas:[
            {
            texto:"A defesa solida ",
            afirmacao:"Você seria um zagueiro central, sempre atento aos ataques adverários."
        },
        {
            texto:"O ataque rapido",
            afirmacao:"Você poderia ser um atacante veloz ou um ponta, sempre em busca de gol."
        }
        ]
    },

    {
    
        enunciado: "Que tipo de jogador você se considera?",
        alternativas:[
            {
            texto:"Um lider em campo",
            afirmacao:"Você seria um meia, criando jogadas em situações complicadas e jogando tranquilo."
            },
        {
            texto:"Um finalizador",
            afirmacao:"Você é um atacante, sempre pronto para marcar gols decisivos."
        }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
    }
    
    function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
    }
     }

     function respostaSelecionada(opcaoSelecionada){
        const afirmacao = opcaoSelecionada. afirmacao;
        historiaFinal+= afirmacao+" ";
        atual++;
        mostraPergunta();
     }


     function mostraResultado(){
        caixaPerguntas.textContent = "";
        textoResultado. textContent = historiaFinal;
        caixaAlternativas.textContent = "";
     }
    
     mostraPergunta();