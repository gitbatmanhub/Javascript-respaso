
//Declaración de la función
function miFunction(a, b){
    console.log(arguments.length);
    return a+b;
}

let resultado= miFunction(2,3);
console.log("La suma es: "+ resultado);

// Declaración de funcion tipo expresion
let sumar = function (a,b){return a+b};

resultado = sumar(1,2)
console.log("La suma es: "+resultado);

//Función que se llama a si misma
(function (a,b){
    console.log("Ejecutando la función de suma: " + (a+b));
})(3,4);

console.log(typeof miFunction);

// Convertir función a texto
var miFuncionTexto= miFunction.toString();
console.log(miFuncionTexto)