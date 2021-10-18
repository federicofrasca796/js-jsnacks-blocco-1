// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

/*
STRUMENTI:
- array
- if (controllare se è un number)
- for
- prompt()
- innerHTML | append() | insertAdjacentHTML
*/

//inseriamo tutti i numeri in input, in un array. Quindi definiamolo vuoto.
let numArray = [];

let sum = 0;
//chiediamo un numero per 10 volte e lo riportiamo alla relativa posizione dell'array definita dal ciclo for.
for (let i = 0; i < 10; i++) {
    //chiedo l'input
    let inputNum = parseInt(prompt(`Inserisci un numero. (Te lo chiederò altre ${10 - i} volte)`));
    // lo inserisco nell'array
    // inputNum = numArray[i];
    numArray[i] = inputNum;
    sum += inputNum;
}
console.log(sum);
//Soluzione 1
document.querySelector('body').insertAdjacentHTML('afterbegin', sum);


//Soluzione 2
// const sum2 = (previousValue, currentValue) => previousValue + currentValue;

// console.log(numArray.reduce(sum2));
// document.querySelector('body').insertAdjacentHTML('afterbegin', numArray.reduce(sum2));






