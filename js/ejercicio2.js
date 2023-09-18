// EJERCICIO 2

window.document.write("<p><strong>SE EJECUTÓ EJERCICIO #2</strong></p>");

let cantidadDeGatos = prompt("Ingrese la cantidad de gatos: ");
let cantidadPasos = prompt("Ingrese la cantidad de pasos: ");
let gato = "🐈";
let pasos = "🐾";

for (let j = 1; j <= cantidadPasos; j++) {

    gato += pasos;

}

for (let i = 1; i <= cantidadDeGatos; i++) {

    console.log("Gato #" + i + ": " + gato);

}

