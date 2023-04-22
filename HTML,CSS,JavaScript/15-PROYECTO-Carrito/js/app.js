//variables
const carritro = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito= [];

cargarEventListener();
function cargarEventListener(){
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}


//funciones
 function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado); 
    }
 }

 function leerDatosCurso(curso){
    console.log(curso);

    //crear un objeto con el contenido del curso
    const infoCurso = {
        imagen:curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
    }
    //arregla elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
    carritoHTML();

 }

 //muestra el carrito de compras en el html
 function carritoHTML(){
    //limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso=>{
        const row = document.createElement('tr');
        row.innerHTML= `
        <td>
            ${curso.titulo}
        </td>
        `;

        //agrega el HMTL del carrito en el body
        contenedorCarrito.appendChild(row);
    });
 }

 //Elimina los cursos del tbody
 function limpiarHTML(){
    //forma lenta
    /* contenedorCarrito.innerHTML = ''; */

    //forma mas rapida y con mejor performance
    while(contenedorCarrito.firstChild){
        contenedorCarrito.remove(contenedorCarrito.firstChild);
    }
 }