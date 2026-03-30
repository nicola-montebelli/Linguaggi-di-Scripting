const numeri = [5, 8, 11, 14];
let i = 0;
let somma = 0;

while (i < numeri.length) {
  somma += numeri[i];
  i++;
}

const pos = numeri.findIndex((n) => { return n === 11;});
const etichette = numeri.map((n) => { return "N-" + n; });

console.log("Posizione 11:", pos);
console.log("Somma:", somma);
console.log("Etichette:", etichette);
