// Stampa le potenze di 2 fino a 1000.

/*
STRUMENTI:
- array
- Math.pow
- for
- if (?)
- innerHTML | append() | insertAdjacentHTML
*/

//definisco un array vuoto
// let pow2 = [];

//inizio un ciclo di potenze alla n che si ferma al raggiungimento del risultato 1000
let i = 0;
let result;

while (Math.pow(2, i) <= 1000){
    result = Math.pow(2, i);
    
    i++;
    document.querySelector('body').innerHTML += result + ' ';
}

//WEIRD
// while (result <= 1000){
//     let i = 0;
//     result = Math.pow(2, i);
//     pow2[i] = result;
    
//     i++;
// }

// console.log(result);