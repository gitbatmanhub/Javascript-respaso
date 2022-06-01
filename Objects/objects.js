



let persona ={
        nombre : "Edwin",
        apellido: "Romero",
        email: "correo@gmail.com",
        edad: 23,
        get nombreCompleto (){
                return this.nombre + ' ' + this.apellido;
        }
}
console.log(persona.nombreCompleto)
