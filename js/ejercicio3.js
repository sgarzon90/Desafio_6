// EJERCICIO 3

window.document.write("<p><strong>SE EJECUTÓ EJERCICIO #3</strong></p>");

let cantidadDeGatos = prompt("Ingrese la cantidad de gatos: ");
let cantidadPasos = prompt("Ingrese la cantidad de pasos: ");
let gato = "🐈";
let gatos = "🐈🐈";
let pasos = "🐾";

for (let j = 1; j <= cantidadPasos; j++) {

    gato += pasos;
    gatos += pasos;

}

for (let i = 1; i <= cantidadDeGatos; i++) {

    if (i % 2 === 0) {
        console.log("Gato #" + i + ": " + gatos);
    } else {
        console.log("Gato #" + i + ": " + gato)
    }
}

