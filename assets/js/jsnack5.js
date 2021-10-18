// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

/*
STRUMENTI:
- array
- prompt()
- modulus %
- for
- if
- innerHTML | append() | insertAdjacentHTML
*/

//creo un array vuoto
const numArray = [];

//dichiaro la variabile contenente il numero inserito dall'utente
let askNum;

//imposto un ciclo for fino a 6 volte
for (let i = 0; i < 6; i++) {
    //Chiedo di inserire il numero
    askNum = parseInt(prompt(`Inserisci un numero per ${6 - i} volte`));
    
    //Controllo se è pari o dispari
    if (askNum % 2 == 0){
    } else {
        //Se è dispari, lo inserisco nell'array
        numArray[i] = askNum;
    }
}

//stampo l'array.
document.querySelector('body').insertAdjacentHTML('afterbegin', 'Questi sono i numeri dispari inseriti:' + numArray);

console.log(numArray);