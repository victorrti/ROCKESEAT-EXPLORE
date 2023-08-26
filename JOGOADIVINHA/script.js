const ramdomNumero = Math.round(Math.random() * 10);
let numeroTentativas = 0;
function handleClick(event){   
    event.preventDefault(); 
    numeroTentativas++; 
    let inputNumero = document.querySelector("#inputNumero")
    if(Number(inputNumero.value) == ramdomNumero){
        document.querySelector(".screean1").classList.add("hide");
        document.querySelector(".screen2").classList.remove("hide");
    }
   
   
}

