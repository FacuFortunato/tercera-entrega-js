//Agregar datos al div del alumno
const alumnoLs = JSON.parse(localStorage.getItem("alumno"));
const alumno = new Alumno (alumnoLs.nombre,alumnoLs.apellido,alumnoLs.contrasena,alumnoLs.inscripciones);

let mostrarDatos = document.getElementById ("info-alumno");
let contenido = document.createElement ("h3");
contenido.innerHTML = `<h3> Alumno: ${alumno.nombre} ${alumno.apellido}</h3>`;

mostrarDatos.appendChild(contenido);

//Setear inscripciones
let setearInscripcion = document.getElementById("btn-inscripcion-1");
let setearInscripcion2 = document.getElementById("btn-inscripcion-2");
let setearInscripcion3 = document.getElementById("btn-inscripcion-3");
let setearInscripcion4 = document.getElementById("btn-inscripcion-4");





function inscribir (inscripciones){
    
    alumno.setInscripcion(inscripciones);
    nuevaInscripcion = inscripciones.value;
    console.log("inscripciones: ", inscripciones.value);

    localStorage.setItem("alumno",JSON.stringify(alumno));

};

setearInscripcion.addEventListener("click", inscribir);
setearInscripcion2.addEventListener("click", inscribir);
setearInscripcion3.addEventListener("click", inscribir);
setearInscripcion4.addEventListener("click", inscribir);

let listaInscripciones = document.getElementById ("lista-inscripciones");
let inscripcion = document.createElement ("li");
inscripcion.innerHTML = `<li>${alumno.inscripciones}</li>`;

listaInscripciones.appendChild(inscripcion);
