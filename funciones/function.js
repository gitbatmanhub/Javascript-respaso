
//Declaración de la función
function miFunction(a, b){
    return a+b;
}

let resultado= miFunction(2,3);
console.log("La suma es: "+ resultado);

// Declaración de funcion tipo expresion
let sumar = function (a,b){return a+b};

resultado = sumar(1,2)
console.log("La suma es: "+resultado);


(function (a,b){
    console.log("Ejecutando la función de suma: " + (a+b));
})(3,4);