// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

/*
STRUMENTI:
- prompt
- for
- if (?)
- innerHTML | append() | insertAdjacentHTML
*/

//Chiedo il numero all'utente
const maxNum = prompt('Digita un numero di 4 cifre');

// console.log(maxNum.charAt(0));
let sum = 0;

for (let i = 0; i < maxNum.length; i++) {
    const element = parseInt(maxNum.charAt(i));
    
    sum += element;
    // console.log(element);
}

console.log(sum);
document.querySelector('body').innerHTML = sum;