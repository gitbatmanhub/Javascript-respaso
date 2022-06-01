

//Función contructor de objetos tipo persona

function Persona(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.nombreCompleto= function (){
                return this.nombre + ' ' + this.apellido;
        }
}


let padre = new Persona('Edwin', 'Romero', 'correo@gmail.com');
console.log(padre.nombreCompleto());
let madre = new Persona('Maria', 'Romero', 'correo@gmail.com');
console.log(madre.nombreCompleto());
