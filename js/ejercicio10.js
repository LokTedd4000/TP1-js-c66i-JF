/*
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20

Output: El 20 es divisible por 2.
*/

let numero = parseInt(prompt("Pon un número:"));

if (Number.isInteger(numero / 2)) {
  document.write("El " + numero + " es divisible por 2.");
} else if (Number.isInteger(numero / 3)){
  document.write("El " + numero + " es divisible por 3.");
} else if (Number.isInteger(numero / 5)){
  document.write("El " + numero + " es divisible por 5.");
} else if (Number.isInteger(numero / 7)){
    document.write("El " + numero + " es divisible por 7.");
} else {
    document.write("El " + numero + " no es divisible por 2, 3, 5 ni 7.");
}
