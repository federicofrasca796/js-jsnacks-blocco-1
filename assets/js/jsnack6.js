// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

/*
STRUMENTI:
- array
- prompt()
- for
- innerHTML | append() | insertAdjacentHTML
*/

//chiedo all'utente un numero
const maxNum = parseInt(prompt('Scegli un numero qualsiasi.'))

//imposto una variabile contenitrice dei risultati
let numContain = [];

//uso il numero per fermare il ciclo for
for (let i = 1; i <= maxNum; i++) {
    numContain += Math.pow(i, 3) + ' ';
}

// console.log(numContain);
document.querySelector('body').innerHTML = `Ecco i cubi dei primi ${maxNum} numeri. (partendo da 1): 
<br>
${numContain}`