// EJERCICIO 1

window.document.write("<p><strong>SE EJECUTÓ EJERCICIO #1</strong></p>");

let cantidadDeGatos = prompt("Ingrese la cantidad de gatos: ");
const gato1 = "😺";
const gato2 = "😸";
const gato3 = "😹";
let cont = 1;

    for (let i = 1; i <= cantidadDeGatos; i++) {

        if (i % 3 === 0) {
            cont = i + 1;
            console.log("Gato #" + i + ":" + " " + gato3);

        } else if (cont < i) {
            console.log("Gato #" + i + ":" + " " + gato2);

        } else {
            console.log("Gato #" + i + ":" + " " + gato1);
        }
    }







