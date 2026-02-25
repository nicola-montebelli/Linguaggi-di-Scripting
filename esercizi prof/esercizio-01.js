/*
Esercizio 01
============

Creare il file `esercizio-01.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:

  - creare un array di stringhe che rappresentano una lista della spesa
  - stampare con `console.log()` gli elementi della lista uno per uno
  - rimuovere il primo elemento dalla lista
  - aggiungere in fondo un nuovo elemento alla lista
  - stampare con `console.log()` gli elementi della lista uno per uno


Output atteso in console:

```
Lista spesa 1:
 - Farina: 2 Kg
 - Uova: 6
 - Latte: 2 l

Lista spesa 2:
 - Uova: 6
 - Latte: 2 l
 - Mele: 2 Kg
```
*/

// - creare un array di stringhe che rappresentano una lista della spesa
let list = ["Farina: 2 Kg", "Uova: 6", "Latte: 2 l"];

// - stampare con `console.log()` gli elementi della lista uno per uno
console.log("Lista spesa 1:");
for (let i = 0; i < list.length; i++) {
    console.log(" - " + list[i]);
}

// - rimuovere il primo elemento dalla lista
// - aggiungere in fondo un nuovo elemento alla lista
list.shift();
list.push("Mele: 2 Kg");

// - stampare con `console.log()` gli elementi della lista uno per uno
console.log("Lista spesa 2:");
for (let i = 0; i < list.length; i++) {
    console.log(" - " + list[i]);
}

//
// Esempio di utilizzo di un array di oggetti per rappresentare una lista della spesa
// Gli elementi dell'array non sono semplici string, ma sono oggetti con proprietà nome, quantita e udm
//
let spesa = [
    { nome: "Pane", quantita: 1, udm: "Kg" },
    { nome: "Latte", quantita: 2, udm: "l" },
    { nome: "Uova", quantita: 6, udm: "pz" },
    { nome: "Carne", quantita: 1, udm: "Kg" },
];

// La stampa di oggetti è più complessa di una semplice stringa,
// perché occorre stampare le proprietà dell'oggetto
console.log("Lista spesa (con oggetti):");
for (let i = 0; i < spesa.length; i++) {
    const el = spesa[i];
    // console.log(" - " + el.nome + ": " + el.quantita + " " + el.udm);
    console.log(` - ${el.nome}: ${el.quantita} ${el.udm}`);
}

// per facilitare la stampa degli elementi dell'array di oggetti
// definiamo una funzione che riutilizzeremo quando dovremo stampare gli elementi di un oggetto
function stampaOggettoInConsole(el) {
    console.log(" - " + el.nome + ": " + el.quantita + " " + el.udm);
}

// esempio di riutilizzo della funzione stampaOggettoInConsole()
console.log(
    "Lista spesa (con oggetti, tramite funzione stampaOggettoInConsole):",
);
for (let i = 0; i < spesa.length; i++) {
    const el = spesa[i];
    stampaOggettoInConsole(el);
}

// Anche le funzioni possono essere assegnate a variabili:
function esegui(altrafunzione) {
    let risultato = altrafunzione();
    console.log("risultato: " + risultato);
}
function raddoppia2() {
    return 2 * 2;
}
esegui(raddoppia2);

// Anche le funzioni con parametri possono essere assegnate a variabili:
function raddoppiaN(n) {
    return n * 2;
}
function eseguiConParametri(altrafunzione, parametro) {
    let risultato = altrafunzione(parametro);
    console.log("eseguiConParametri risultato: " + risultato);
}
eseguiConParametri(raddoppiaN, 4);
eseguiConParametri(raddoppiaN);

// esempio di utilizzo di una funzione come parametro della .forEach
console.log("Lista spesa (con oggetti, tramite funzione in forEach):");
spesa.forEach(function stampasdag(el) {
    console.log(" - " + el.nome + ": " + el.quantita + " " + el.udm);
});

// esempio di utilizzo della funzione stampaOggettoInConsole come parametro della .forEach
console.log(
    "Lista spesa (con oggetti, tramite funzione stampaOggettoInConsole in forEach):",
);
spesa.forEach(stampaOggettoInConsole);
