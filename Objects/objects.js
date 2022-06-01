



let persona ={
        nombre : "Edwin",
        apellido: "Romero",
        email: "correo@gmail.com",
        edad: 23,
        nombreCompleto: function (){
                return this.nombre + ' ' + this.apellido;
        }
}


persona.tel = '0967792636';
delete persona.tel;

console.log(persona)