// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

/*
STRUMENTI:
- prompt
- if
- innerHTML | insertAdjacentHTML | append()
*/

//Richiedere 2 input come numeri.
let num1 = parseInt(prompt('Inserisci un numero'));
let num2 = parseInt(prompt('Inserisci un secondo numero'));
// console.log(num1, num2);

//Controllo se sono type: numbers
/*if (num1 === NaN && num2 === NaN){ //NOT WORKING
    console.log('Nope');
    alert('Puoi inserire solo numeri');
    num1 = parseInt(prompt('Inserisci un numero'));
    num2 = parseInt(prompt('Inserisci un secondo numero'));
}*/

//Se il primo numero è maggiore del secondo, stampalo. Altrimenti stampa il secondo.

if (num1 > num2){
    document.querySelector('body').innerHTML = num1;
} else {
    document.querySelector('body').innerHTML = num2;
}
