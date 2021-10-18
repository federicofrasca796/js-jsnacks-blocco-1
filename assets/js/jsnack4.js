// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

/*
STRUMENTI:
- array
- prompt()
- variabile sentinella
- for
- if
- innerHTML | append() | insertAdjacentHTML
*/

//Creo un array di nomi random
const GatsbyList = ['Tiziano', 'Fabiola', 'Fabio', 'Chiara'];

//Chiedo il nome all'utente
const userName = prompt('Come ti chiami?');

//definisco una variabile di valore "false" tale che diventi "true" al rilevamento di uno dei nomi presenti nell'array
let sentinel = false;

//controllo se 'userName' combacia con GatsbyList[0], poi con GatsbyList[1] e così via. Se userName == GatsbyList[?] allora sentinel==true.

for (let i = 0; i < GatsbyList.length; i++) {
    if (userName == GatsbyList[i]){
        sentinel = true;
    }
}

//stampa l'esito
if (sentinel){
    document.querySelector('body').innerHTML = `<h2>Può partecipare alla Grande Festa, ${userName}.</h2>`
} else {
    document.querySelector('body').innerHTML = `<h2>Come osi sottrarre del tempo a noi aristocratici altolocati. Fuori plebe!</h2>`
}
