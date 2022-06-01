



let persona ={
        nombre : "Edwin",
        apellido: "Romero",
        email: "correo@gmail.com",
        edad: 23,
        nombreCompleto: function (){
                return this.nombre + ' ' + this.apellido;
        }
}


console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.nombreCompleto())