/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/

let numero = parseInt(prompt("Pon un número:"));

   
    if (Number.isInteger(numero / 2) && Number.isInteger(numero / 3) && Number.isInteger(numero / 5) && Number.isInteger(numero / 7)){
        document.write("El " + numero + " es divisible por 2, por 3, por 5 y por 7.");
    } else if (Number.isInteger(numero / 2) && Number.isInteger(numero / 3) && Number.isInteger(numero / 5)){
        document.write("El " + numero + " es divisible por 2, por 3 y por 5.");
    } else if (Number.isInteger(numero / 2) && Number.isInteger(numero / 3)){        
        document.write("El " + numero + " es divisible por 2 y por 3.");
    } else if (Number.isInteger(numero / 2)){
        if (Number.isInteger(numero / 2) && Number.isInteger(numero / 5)){
            document.write("El " + numero + " es divisible por 2 y por 5.");
        }else if (Number.isInteger(numero / 7) && Number.isInteger(numero / 2)){
            document.write("El " + numero + " es divisible por 2 y por 7.");
        } else {
            document.write("El " + numero + " es divisible por 2");
        }
    }else if (Number.isInteger(numero / 5)){
        if(Number.isInteger(numero / 5) && Number.isInteger(numero / 3)){
            document.write("El " + numero + " es divisible por 3 y por 5.");
        } else {
            document.write("El " + numero + " es divisible por 5.");
        }
    } else if (Number.isInteger(numero / 3)){
        if(Number.isInteger(numero / 3) && Number.isInteger(numero / 7)){
            document.write("El " + numero + " es divisible por 3 y por 7.");
        } else{
            document.write("El " + numero + " es divisible por 3.");
        }
    } else if (Number.isInteger(numero / 7)){
        document.write("El " + numero + " es divisible por 7.");
    } else{
        document.write("El número " + numero + " no es divisible");
    }