// Calcola la somma e la media dei primi 10 numeri.

/*
STRUMENTI:
- for
- if (?)
- innerHTML | append() | insertAdjacentHTML
*/

let sum = 0;
let avg = 0;

for (let i = 0; i < 10; i++) {
    sum += i;
    avg += (i)/10;
}

console.log(sum);
console.log(avg);

document.querySelector('body').innerHTML = 'La somma è ' + sum + '. La media è ' + avg;