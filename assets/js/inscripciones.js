class CURSOS {

    constructor (id,contenidos,precioMensual,fecha_inicio){

        this.id = id ;
        this.contenidos = contenidos ;
        this.precioMensual = precioMensual ;
        this.fecha_inicio = fecha_inicio ;
    }

    disponibles = [

        {
            "id": 1,
            "contenidos": 'Taller reparación de radiadores',
            "precio mensual": 3000,
            "fecha inicio": "23/02/2023",
        },
        {
            "id": 2,
            "contenidos": 'Carrera mecánica',
            "precio mensual": 5000,
            "fecha inicio": "23/02/2023",
        },
        {
            "id": 3,
            "contenidos": 'Curso de mecánica automotriz',
            "precio mensual": 3000,
            "fecha inicio": "23/02/2023",
        },
        {
            "id": 4,
            "contenidos": 'Curso de inyección electrónica',
            "precio mensual": 2000,
            "fecha inicio": "23/02/2023",
        }
    ]
}