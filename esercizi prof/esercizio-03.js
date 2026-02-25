/*
Esercizio 03
============

Creare il file `esercizio-03.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:

  - Dato un numero intero N (esempio N=20), calcolare la somma dei numeri interi da 1 a N


Output atteso in console:

```
Somma da 1 a 20: 210

```
*/

// Soluzione 1: con array di numeri da sommare
let numeri = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let somma = 0;
for (let i = 0; i < numeri.length; i++) {
    somma = somma + numeri[i];
}
console.log("1: Somma dei numeri da 1 a 20: " + somma);

// --------------------------
// Soluzione 2: Conoscendo N posso generare "dinamicamente" di numeri da sommare
let N = 1250;
somma = 0;
for (let n = 1; n <= N; n++) {
    somma = somma + n;
}
console.log("2: Somma dei numeri da 1 a " + N + ": " + somma);

// --------------------------
// Soluzione 3: utilizzo di una funzione

function sommaNumeriDaUnoAN(N) {
    let totale = 0;
    for (let n = 1; n <= N; n++) {
        totale = totale + n;
    }
    return totale;
}

console.log("3: Somma dei numeri da 1 a " + N + ": " + sommaNumeriDaUnoAN(N));
