document.addEventListener('DOMContentLoaded', function() {

    //seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    //asignar eventos
    inputEmail.addEventListener('blur',validar);
    inputAsunto.addEventListener('blur',validar);
    inputMensaje.addEventListener('blur',validar);

    function validar(e) {
        //trim elimina los espacios en blanco, importante poner en los formularios para validar
        if(e.target.value.trim() ===''){
            
        }else{

        }
    }


});