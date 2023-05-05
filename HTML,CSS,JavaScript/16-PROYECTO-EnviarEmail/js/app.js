document.addEventListener('DOMContentLoaded', function() {

    //seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //asignar eventos
    inputEmail.addEventListener('blur',validar);
    inputAsunto.addEventListener('blur',validar);
    inputMensaje.addEventListener('blur',validar);

    function validar(e) {
        //trim elimina los espacios en blanco, importante poner en los formularios para validar
        if(e.target.value.trim() ===''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        }else{

        }
    }

    function mostrarAlerta(mensaje, referencia) {
        //generar alerta en HTML
        const error = document.createElement('div');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        //inyectar el error al formulario
        referencia.appendChild(error);
        //otra forma es
        /* formulario.innerHTML = error.innerHTML; */

    }

});