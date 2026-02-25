/*
Esercizio 05
============

Creare il file `esercizio-05.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:

  - Creare un array di numeri interi che rappresentano i voti delle verifiche del corso,
    i possibili valori che ogni voto può assumere vanno da 0 a 100.
  - Creare una funzione che riceve come parametro l'array di numeri e ritorna come risultato
    la media di voti
  - Stampare in console l'elenco dei voti e la media.

Output atteso in console:

```
Voti delle verifiche: 80 100 90
Voto medio: 90
```
*/

let voti = [45, 60, 75, 90];

//let voti = [];

function mediaVoti(listaVoti) {
    let somma = 0;
    for (let i = 0; i < listaVoti.length; i++) {
        somma = somma + listaVoti[i];
    }

    if (listaVoti.length === 0) {
        return 0;
    }
    return somma / listaVoti.length;
}

console.log("Voto medio: " + mediaVoti(voti));
