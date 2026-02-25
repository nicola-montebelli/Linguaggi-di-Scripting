/*
Esercizio 04
============

Creare il file `esercizio-04.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:

  - Creare una funzione `saluta()` che accetta come parametro il nome di una persona e
    scrive in console un saluto seguito dal nome
  - Utilizzare la funzione per salutare alcuni nomi


Output atteso in console:

```
Ciao Daniele!
Ciao Marco!
Ciao Anna!
...
```
*/

function saluta(nome) {
    console.log("Ciao " + nome + "!");
}

saluta("Daniele");
saluta("Marco");
saluta("Anna");

// ma questa non ha senso, eppure è permessa da JavaScript perché è un linguaggio non tipizzato
saluta(4); // !?
