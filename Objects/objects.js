let persona1={
        nombre: 'Edwin',
        apellido: 'Romero',
        nombreCompleto: function (){
                return this.nombre+ ' '+ this.apellido;
        }
}

let persona2 = {
        nombre: 'Nathaly',
        apellido: 'Torres'
}

//Uso de call para usar el metodo nombre completo usando el metodo de p1 en p2
console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));