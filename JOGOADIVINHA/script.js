const ramdomNumero = Math.round(Math.random() * 10);
let numeroTentativas = 1;
const screen1 = document.querySelector(".screean1");
const screen2 = document.querySelector(".screen2");
function handleTryClick(event){   
    event.preventDefault(); 
   
    let inputNumero = document.querySelector("#inputNumero")
    if(Number(inputNumero.value) == ramdomNumero){
        toggleScrean()
        document.querySelector(".screen2 h2").innerText = `Você acertou em ${numeroTentativas} tentativas`
    }   
    numeroTentativas++; 
   
}

const btnTry = document.querySelector("#try");
const btnReset = document.querySelector("#btnReset"); 
btnTry.addEventListener('click',handleTryClick)
btnReset.addEventListener('click',function(){
        toggleScrean()
        document.querySelector('input').value ="";
        numeroTentativas =1;
       
})

function toggleScrean(){
    screen2.classList.toggle("hide");
    screen1.classList.toggle("hide");
}

