

//Función contructor de objetos tipo persona

function Persona(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
}


let padre = new Persona('Edwin', 'Romero', 'correo@gmail.com');
console.log(padre);
let madre = new Persona('Maria', 'Romero', 'correo@gmail.com');
console.log(madre);
