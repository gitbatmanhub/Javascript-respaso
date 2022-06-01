

class Persona{
    constructor(nombre, apellido) {
        this._nombre=nombre;
        this._apellido=apellido;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre= nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido= apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre
    toString(){
        //Se aplica polimorfismo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("Hola que hace");
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido );
    }

}
class Empleado extends Persona{
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);//Llamar al constructor de la clase padre
        this._departamento= departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento=departamento;
    }
    //Sobreescritura
    nombreCompleto() {
       return super.nombreCompleto() + ' ' + this._departamento;
    }

}

let persona1 = new Persona('Edwin', 'Romero');
persona1.nombre='Cesar';  //Set nombre
console.log(persona1.toString()); //Get Nombre

let empleado1 = new Empleado('Nathaly','Torres', 'Docencia');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
//console.log(persona1.saludar()); No es posible llamar un metodo static desde un objeto
//Pero si desde una clase
/*

Empleado.saludar();

 */
Persona.saludar();
Persona.saludar2(persona1);

