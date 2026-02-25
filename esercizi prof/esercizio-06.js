/*
Esercizio 06
============

Creare il file `esercizio-06.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:

  - Creare un array di numeri interi
  - Creare una funzione che riceve come parametro l'array di numeri e ritorna come risultato
    il valore massimo presente nell'array
  - Creare una funzione che riceve come parametro l'array di numeri e ritorna come risultato
    il valore minimo presente nell'array
  - Stampare in console il valore minimo ed il valore massimo presente nell'array.

Output atteso in console:

```
Valore minimo: -5
Valore massimo: 37
```
*/

function minimoDellaLista(listaNumeri) {
    if (listaNumeri == null) {
        return null;
    }

    let minimo = null;
    for (let i = 0; i < listaNumeri.length; i++) {
        if (i === 0) {
            minimo = listaNumeri[0];
        }
        if (listaNumeri[i] < minimo) {
            minimo = listaNumeri[i];
        }
    }
    return minimo;
}

function minimoDellaLista2(listaNumeri) {
    if (listaNumeri == null || listaNumeri.length === 0) {
        return null;
    }

    let minimo = listaNumeri[0];
    for (let i = 1; i < listaNumeri.length; i++) {
        if (listaNumeri[i] < minimo) {
            minimo = listaNumeri[i];
        }
    }
    return minimo;
}

console.log("minimo null: " + minimoDellaLista(null));
console.log("minimo null: " + minimoDellaLista2(null));

console.log("minimo vuoto: " + minimoDellaLista([]));
console.log("minimo vuoto: " + minimoDellaLista2([]));

console.log("minimo 1: " + minimoDellaLista([1]));
console.log("minimo 1: " + minimoDellaLista2([1]));
console.log("minimo 3 2 6 1: " + minimoDellaLista([3, 2, 6, 1]));
console.log("minimo 3 2 6 1: " + minimoDellaLista2([3, 2, 6, 1]));

function massimoDellaLista2(listaNumeri) {
    if (listaNumeri == null || listaNumeri.length === 0) {
        return null;
    }

    let massimo = listaNumeri[0];
    for (let i = 1; i < listaNumeri.length; i++) {
        if (listaNumeri[i] > massimo) {
            massimo = listaNumeri[i];
        }
    }
    return massimo;
}

console.log("massimo 3 2 6 1: " + massimoDellaLista2([3, 2, 6, 1]));
