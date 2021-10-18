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

//chiediamo un numero per 10 volte e lo riportiamo alla relativa posizione dell'array definita dal ciclo for.
for (let i = 0; i < 10; i++) {
    //chiedo l'input
    let inputNum = parseInt(prompt(`Inserisci un numero. (Te lo chiederò altre ${10 - i} volte)`));
    // lo inserisco nell'array
    numArray[i] = inputNum;
}

//Soluzione 1
const sum = numArray[0] + numArray[1] + numArray[2] + numArray[3] + numArray[4] + numArray[5] + numArray[6] + numArray[7]+numArray[8]+ numArray[9];

// console.log(sum);


//Soluzione 2
const sum2 = (previousValue, currentValue) => previousValue + currentValue;

console.log(numArray.reduce(sum2));
document.querySelector('body').insertAdjacentHTML('afterbegin', numArray.reduce(sum2));



