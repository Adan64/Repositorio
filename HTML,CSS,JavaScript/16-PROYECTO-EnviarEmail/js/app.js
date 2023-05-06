document.addEventListener('DOMContentLoaded', function() {
    const email= {
        email: '',
        asunto:'',
        mensaje:'',
    }

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
            return;
        }

        if(e.target.id=== 'email' &&  !validarEmail(e.target.value)){
            mostrarAlerta('El campo no es valido', e.target.parentElement);
            return;
        }

        limpiarAlerta( e.target.parentElement);

        //asignar los valores
        email[e.target.email]= e.target.value.trim().toLowerCase();
        
        //COMPROBAR EL OBJETO DE EMAIL
        comprobarEmail(email);
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);
        
        
        //generar alerta en HTML
        const error = document.createElement('div');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        
        //inyectar el error al formulario
        referencia.appendChild(error);
        //otra forma es
        /* formulario.innerHTML = error.innerHTML; */
        
    }
    
    function limpiarAlerta(referencia){
        //comprueab si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }

    }
    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail(){
        console.log(email);
    }
});

//ITAIPUUU