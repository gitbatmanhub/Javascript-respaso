/*
//Declaración de la función
function miFunction(a, b){
    console.log(arguments.length);
    return a+b;
}

let resultado= miFunction(2,3);
console.log("La suma es: "+ resultado);
*/

/*
// Declaración de funcion tipo expresion
let sumar = function (a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b
};



resultado = sumar(1,2)
console.log("La suma es: "+resultado);

 */
/*
//Función que se llama a si misma
(function (a,b){
    console.log("Ejecutando la función de suma: " + (a+b));
})(3,4);

console.log(typeof miFunction);

// Convertir función a texto
var miFuncionTexto= miFunction.toString();
console.log(miFuncionTexto)


 */


// Función tipo flecha en comparación a la tipo expresión
/*
const sumarFuncionTipoFlecha = (a,b) => a+b;
resultado = sumarFuncionTipoFlecha(3,5);
console.log(resultado);


 */
let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11, 3);
console.log( resultado );

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return suma;
}



