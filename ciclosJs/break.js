let contador=0;



for( contador; contador <=10; contador++){
    if (contador%2==0){
        console.log(contador);
        break;
    }
}


while (contador<=10){
    contador++;
    if (contador%2==0){
        console.log(contador);
    }
}


do {
    contador++;
    if (contador%2==0){
        console.log(contador);
    }
}while (contador<=10);