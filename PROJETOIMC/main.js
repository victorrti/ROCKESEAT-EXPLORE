const form = document.querySelector('form');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');




const Modal = {

    wrapper:document.querySelector('.modal-wrapper'),
    message: modalMessage = document.querySelector('.modal .titulo span'),
    btnClose:document.querySelector('.modal button.close'),
    open(){

        Modal.wrapper.classList.add('open');

    },
    close(){
        Modal.wrapper.classList.remove('open');
    }
}
form.onsubmit = function(event){
    console.log("teste")
    event.preventDefault();
    
    const peso = inputPeso.value;
    const altura = inputAltura.value;
    result = IMC(peso,altura);
    const message = `Seu IMC é de ${result}` 
    Modal.message.innerText = message;
    Modal.open();
    
    
}

function IMC(peso,altura){
    return (peso/((altura/100)**2)).toFixed(2);
}

Modal.btnClose.onclick = function(){
    Modal.close();
}

