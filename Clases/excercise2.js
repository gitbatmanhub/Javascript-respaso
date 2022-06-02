
class DispositivoEntrada{
    constructor(tipoEntrada, marca) {
        this._tipoEntrada= tipoEntrada;
        this._marca= marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada= tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca;
    }

}
 class Raton extends DispositivoEntrada{
     static contadorRaton = 0;
     constructor(tipoEntrada, marca) {
         super(tipoEntrada, marca);
         this._idRaton = ++Raton.contadorRaton;
    }
    get idRaton(){
         return this._idRaton;
    }
    toString(){
         return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }

 }

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }

}

class Monitor{
    static contadorMonitor= 0;

    constructor( marca, tamaño ){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca= marca;
        this._tamaño= tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;

    }
}

class Computadora {
    static contadorComputadora=0;
    constructor(nombre, monitor, raton, teclado) {
        this._idComputadora= ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton= raton;
        this._teclado= teclado;
    }

    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}


class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = '';
        for( let computadora of this._computadoras ){
            computadorasOrden += `\n${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}




 let raton1 = new Raton('Usb', 'HP');
console.log(raton1.toString());
let raton2 = new Raton('Bluetoth', 'DELL');
console.log(raton2.toString());

let teclado1 = new Teclado('Bluetoth', 'MSI');
let teclado2 = new Teclado('USB', 'Xtech');
console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1= new Monitor('Hp', '15pl');
let monitor2= new Monitor('DELL', '27pl');
console.log(monitor1.toString());
console.log(monitor2.toString());


let computador1= new Computadora('Hp', monitor1, raton1, teclado1);
let computador2= new Computadora('Apple', monitor2, raton2, teclado2);
console.log(computador1.toString());
console.log(computador2.toString());

let orden1= new Orden();
orden1.agregarComputadora(computador1);
orden1.agregarComputadora(computador2);
console.log(orden1.mostrarOrden());

let orden2 = new Orden();
orden2.agregarComputadora(computador1);
orden2.agregarComputadora(computador2);
console.log(orden2.mostrarOrden());

