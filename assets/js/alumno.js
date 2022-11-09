class Alumno {

    constructor (nombre,apellido,contrasena){

        this.nombre = nombre;
        this.apellido = apellido;
        this.contrasena = contrasena;

        this.inscripciones = [];
    }

    getDatos (){
        
        this.nombre + " " + this.apellido
    };


    setInscripcion (nuevaInscripcion){

        this.inscripciones.push (nuevaInscripcion);
    }
}


