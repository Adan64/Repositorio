document.addEventListener('DOMContentLoaded', function() {
    const email= {
        email: '',
        asunto:'',
        mensaje:'',
    };

    //seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="restet"]');
    const spinner = document.querySelector('#spinner');

    //asignar eventos  
    inputEmail.addEventListener('input',validar);
    inputAsunto.addEventListener('input',validar);
    inputMensaje.addEventListener('input',validar);

    formulario.addEventListener('submit', enviarEmail)

    btnReset.addEventListener('click',function(e){
        e.preventDefault();
        
        resetFormulario();
    })

    function enviarEmail(){
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(()=>{                      
            spinner.classList.remove('hidden');
            spinner.classList.add('flex');

            resetFormulario(); 

            //crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove(); 
            }, 3000);
        },3000);
    }


    function validar(e) {
        //trim elimina los espacios en blanco, importante poner en los formularios para validar
        if(e.target.value.trim() ===''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.email]= '';
            comprobarEmail();
            return;
        }

        if(e.target.id=== 'email' &&  !validarEmail(e.target.value)){
            mostrarAlerta('El campo no es valido', e.target.parentElement);
            email[e.target.email]= '';
            comprobarEmail();
            return;
        }

        limpiarAlerta( e.target.parentElement);

        //asignar los valores
        email[e.target.email]= e.target.value.trim().toLowerCase();
        
        //COMPROBAR EL OBJETO DE EMAIL
        comprobarEmail();
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

    function comprobarEmail() {
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        } 
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        //reiniciar objeto
        email.email = '';
        email.asunto = '';
        email.mensaje ='';
        
        formulario.reset();
        comprobarEmail();
}
});

