

class Persona{
    static contadorPersonas =0; //atributo de clase

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido) {
        this._nombre=nombre;
        this._apellido=apellido;
        if( Persona.contadorPersonas<Persona.MAX_OBJ){
            this.idPersona= ++Persona.contadorPersonas;
        }else {
            console.log('Se han superado el máximo de objetos permitidos');
        }
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
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
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
console.log(persona1.toString());

let empleado1 = new Empleado('Nathaly','Torres', 'Docencia');
console.log(empleado1.toString());

//console.log(Persona.contadorPersonas);
let persona2 = new Persona('Carmina', 'Salazar');
console.log(persona2.toString());
let persona3 = new Persona('Chavi', 'Salazar');
console.log(persona3.toString());
let persona4 = new Persona('Edward', 'Santos')
console.log(persona4.toString());
let persona5 = new Persona('Alejandro', 'Santos')
console.log(persona5.toString());

console.log(Persona.MAX_OBJ);
