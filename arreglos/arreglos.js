let i = 0;
// Manera tradicional
 /*
let autos = new Array('BMW', 'Mercedez Benz', 'Volvo');
*/


const autos = ['BMW', 'Mercedez Benz', 'Volvo']
console.log(autos)

//Obtener un valor de un arreglo único
console.log(autos[2]);


//recorrer un arreglo
for (i; i<autos.length; i++){
    console.log(i+ ': '+ autos[i]);
}

//Modificar elementos de un arreglo

autos[1]='Chevrolet';
console.log(autos);

//Agregar elementos a un arreglo

autos.push('Audi');
console.log(autos);