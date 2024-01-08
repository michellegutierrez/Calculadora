/*Desarrolla un programa que calcule el promedio de tres notas ingresadas 
por el usuario, solicitando también el nombre del alumno. Además, el 
programa debe verificar si las notas ingresadas se encuentran dentro del 
rango válido (por ejemplo, de 0 a 10). Una vez calculado el promedio de las 
tres notas, el programa debe evaluar si dicho promedio es mayor o igual a 
7.*/


let suma = 0;
let promedio = 0;
let nombre = prompt("Ingrese el nombre del estudiante: ");


    for (let i =0; i < 3; i++){
       
        let number = parseInt(prompt("Entre un número entre 1 y 10:  ")); 
        if( (number > 0) && (number <= 10)){
         suma += number;
        }
        else{
            i = i - 1;
            console.log("Ingrese una nota valida");
        }

    }

    
    promedio = suma / 3;
    if(promedio >= 7){
     console.log( nombre + ', ¡felicidades! Has aprobado con un promedio de ' + Math.trunc(promedio) + '.' );
    }
    else{
        console.log( nombre + ', gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ' + Math.trunc(promedio) + '.' );
    }