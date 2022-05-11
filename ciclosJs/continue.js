let i=0;

for (i; i<=10; i++){
    if (i%2!==0){ //<- si el valor no es par continuo
        continue;//ir a la siguiente iteración
    }else{
        console.log(i);
    }
}