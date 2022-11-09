//Primera captación de datos

const inputNombre = document.getElementById ("nombre");
const inputApellido = document.getElementById ("apellido");
const inputContrasena = document.getElementById ("contrasena");
const cargaDatos = document.getElementById ("btn-ingreso");

let nombre;
let apellido;
let contrasena;

inputNombre.addEventListener ("input", ()=>{

    nombre = inputNombre.value;

});
inputApellido.addEventListener ("input", ()=>{
    
    apellido = inputApellido.value;

});
inputContrasena.addEventListener ("input", ()=>{

    contrasena = inputContrasena.value;

});


function validarDatos () {

    const alumno = new Alumno (nombre,apellido,contrasena);

    //Setear en LS
    localStorage.setItem("alumno",JSON.stringify(alumno));
};
cargaDatos.addEventListener("click", validarDatos);













