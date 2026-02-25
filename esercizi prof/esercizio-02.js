/*
Esercizio 02
============

Creare il file `esercizio-02.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:

  - creare un array contenente almeno 10 numeri interi
  - Per ciascun elemento della lista, scrivere in console se il numero è pari o dispari. 


Output atteso in console:

```
1: dispari
3: dispari
8: pari
2: pari
11: dispari
...
```
*/

let numeri = [2, 3, 4, 5, 56, 67];

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] % 2 === 0) {
        console.log(numeri[i] + ": pari");
    } else {
        console.log(numeri[i] + ": dispari");
    }
}

for (let i = 0; i < numeri.length; i++) {
    console.log(numeri[i] + ": " + (numeri[i] % 2 === 0 ? "pari" : "dispari"));
}

// Soluzione più avanzata:
// - numeri casuali
// - funzione

// Determino i numeri casualmente
let numeriCasuali = [];
let N = 20;

// finché non ho ottenuto N numeri non ripetuti all'interno di numeriCasuali,
// estraggo un numero casuale e se non è già stato estratto,
// lo aggiungo all'interno di numeriCasuali
while (numeriCasuali.length < N) {
    // estraggo un numero casuale 0-99
    let numero = Math.floor(Math.random() * 100);

    // se non è già stato estratto
    if (!numeriCasuali.includes(numero)) {
        // lo aggiungo all'interno di numeriCasuali
        numeriCasuali.push(numero);
    }
}

function pariODispari(elenco) {
    for (let i = 0; i < elenco.length; i++) {
        if (elenco[i] % 2 === 0) {
            console.log(elenco[i] + ": pari");
        } else {
            console.log(elenco[i] + ": dispari");
        }
    }
}

// funzione per il confronto numerico
function compareFn(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

numeriCasuali.sort(compareFn);
pariODispari(numeriCasuali);
