const biscoito = document.querySelector("#biscoito");
const mensagem = document.querySelector(".menssagem p")
const tela1 = document.querySelector("#abrir")
const tela2 = document.querySelector("#mensagem")
const novamente =document.querySelector("#novamente")
const mensagem1 = 'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
const mensagem2 = 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.'
const mensagem3 = 'Defeitos e virtudes são apenas dois lados da mesma moeda.'
const mensagens = [mensagem1,mensagem2,mensagem3,mensagem1,mensagem2,mensagem3,mensagem1,mensagem2,mensagem3,mensagem3];
let randomNumber = Math.round(Math.random() * 10);
biscoito.addEventListener('click',abrirBiscoito);
novamente.addEventListener('click',retornar)
function abrirBiscoito(event){
    tela1.classList.toggle("hide")
    tela2.classList.toggle("hide")
    mensagem.innerText = mensagens[randomNumber];
}
function retornar(event){
    tela1.classList.toggle("hide")
    tela2.classList.toggle("hide")
    randomNumber = Math.round(Math.random() * 10);
}