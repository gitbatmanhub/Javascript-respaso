let persona1={
        nombre: 'Edwin',
        apellido: 'Romero',
        nombreCompleto: function (titulo, tel){
                return titulo+ ': '+ this.nombre + ' '+ this.apellido +' ' + tel;
        }
}

let persona2 = {
        nombre: 'Nathaly',
        apellido: 'Torres'
}

//Uso de call para usar el metodo nombre completo usando el metodo de p1 en p2
console.log(persona1.nombreCompleto('Lic', '0999017549'));

console.log(persona1.nombreCompleto.call(persona2, 'Ing', '0967792636'));


