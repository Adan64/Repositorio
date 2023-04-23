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

    //climina cursos del carrito 
    carritro.addEventListener('click', eliminarCurso);

    //vaciar carrito
    vaciarCarritoBtn.addEventListener('click',()=>{
        articulosCarrito=[];
        limpiarHTML();//eliminamos todo el HTML
    });
}


//funciones
 function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado); 
    }
 }

 //elimina un curso de carrito
 function eliminarCurso(e){
    console.log("pruebas");
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //elimina del arreglo articulosCarrito por el data-id
        articulosCarrito=articulosCarrito.filter(curso=> curso.id !== cursoId);

        carritoHTML(); //iterar sobre el carrito y mostrar su HTML

    }
 }

 function leerDatosCurso(curso){
    /* console.log(curso); */

    //crear un objeto con el contenido del curso
    const infoCurso = {
        imagen:curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso=> curso.id === infoCurso.id);
    if(existe){
        //actualizamos la cantidad
        const cursos=articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //retorna el objeto actualzado
            }else{
                return curso; //retorna los objetos que no sosn los duplicados
            }
        });
        articulosCarrito = [...cursos];
    }else{
        //agrega elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];

    }


     console.log(articulosCarrito); 
    carritoHTML();

 }

 //muestra el carrito de compras en el html
 function carritoHTML(){
    //limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso=>{
        const { imagen, titulo, precio, cantidad, id}= curso;
        const row = document.createElement('tr');
        row.innerHTML= 
        `
        <td>
            <img src="${imagen}" width = "100">
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
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
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
 }