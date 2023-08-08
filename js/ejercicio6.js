/*
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
*/

let numero1 = parseInt(prompt("Pon un número:"));
let numero2 = parseInt(prompt("Pon otro número:"));

if (numero1 > numero2) {
  document.write("El " + numero1 + " es el mayor");
} else {
  document.write("El " + numero2 + " es el mayor");
}
