// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

/*
STRUMENTI:
- prompt()
- .length
- if
- innerHTML | append() | insertAdjacentHTML
*/

// Richiedo le due parole all'utente via prompt()
const word1 = prompt('Inserisci la prima parola che ti salta in mente.');
const word2 = prompt("Dimmene un'altra ancora!");

//se la parola è troppo corta, mock the user
if (word1.length < 2 || word2.length < 2){
    document.querySelector('body').innerHTML = 'Non sia mai ti si consumasse troppo la tastiera con queste parole di lunghezza abnorme! :D <br> ...In ogni caso: <br>';
}

//se la prima parola ha .length > della seconda, stampa la seconda parola e poi la prima. Altrimenti, stampa in ordine opposto.
if (word1.length > word2.length){
    document.querySelector('body').append(word2 + 'è più corta di' + word1);
} else {
    document.querySelector('body').append(word1 + ' è più corta di ' + word2);
}


