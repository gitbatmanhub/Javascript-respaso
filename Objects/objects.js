



let persona ={
        nombre : "Edwin",
        apellido: "Romero",
        email: "correo@gmail.com",
        edad: 23,
        nombreCompleto: function (){
                return this.nombre + ' ' + this.apellido;
        }
}



for(nombrePropiedad in persona){
        console.log(nombrePropiedad);
        console.log(persona[nombrePropiedad]);
}