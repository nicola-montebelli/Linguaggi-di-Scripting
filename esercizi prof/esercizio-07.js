/*
Esercizio 07
============

Creare il file `esercizio-07.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:

  - Creare una funzione che riceve come parametro una parola e ritorna come risultato
    il numero di vocali presenti nella parola
  - Stampare in console la parola ed il numero di vocali presenti nella parola.

Output atteso in console:

```
La parola "esercizio" contiene 5 vocali
```
*/

function contaVocali(input) {
    let numeroVocali = 0;

    const VOCALI = ["a", "e", "i", "o", "u"]; // TODO: gestire anche le accentate

    // prendo ciascun carattere della stringa input (problema 1: ciclare i caratteri di una stringa)
    // e mi chiedo se il carattere è contenuto nell'array delle VOCALI
    // Se è presente, incremento il numero delle vocali (problema 2: determinare se un carattere è presente in una array)

    if (input == null || input === "") {
        return 0;
    }

    input = input.toLowerCase();

    for (let i = 0; i < input.length; i++) {
        //let ch = input.charAt(i);
        let ch = input[i];

        if (VOCALI.includes(ch)) {
            numeroVocali++;
        }
    }

    return numeroVocali;
}

let parola = "esercizio";
console.log(
    "La parola '" + parola + "' contiene " + contaVocali(parola) + " vocali"
);
