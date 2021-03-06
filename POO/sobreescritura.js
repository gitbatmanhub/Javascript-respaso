class Empleado{
    constructor(nombre, sueldo) {
        this.nombre= nombre;
        this.sueldo= sueldo;
    }
    obtenerDetalles(){
        return `Empleado: Nombre: ${this.nombre}, Sueldo: ${this.sueldo}`;

    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento=departamento;
    }
    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()}, Dpto: ${this.departamento}` ;
    }
}
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Esa un objeto de tipo Gerente");
    } else if(tipo instanceof Empleado){
        console.log("Esa un objeto de tipo Empleado");

    }else if(tipo instanceof Object){
        console.log("Esa un objeto de tipo Objeto");

    }

}



let empleado1 = new Empleado('Edwin', '5000$')
let gerente1 = new Gerente('Edwin', '300$', 'Sistema' );
imprimir(empleado1);
imprimir(gerente1);