let persona1={
        nombre: 'Edwin',
        apellido: 'Romero',
        nombreCompleto: function (titulo, tel){
                //return this.nombre+ ' '+ this.apellido;
               return titulo+ ': '+ this.nombre + ' '+ this.apellido +' ' + tel;
        }
}

let persona2 = {
        nombre: 'Nathaly',
        apellido: 'Torres'
}

//Uso de apply para usar el metodo nombre completo usando el metodo de p1 en p2
console.log(persona1.nombreCompleto('Lic', '0999017549'));


//Puedo pasar la variable que contiene el array o el content del array
//let arreglo = ['Ing', '0961179236'];
console.log(persona1.nombreCompleto.apply(persona2, ['Ing', '0961179236']));


