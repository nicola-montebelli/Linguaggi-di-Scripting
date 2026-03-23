/* Crea un'interfaccia per rappresentare un prodotto con le seguenti proprietà:
nome (stringa), prezzo (numero) e disponibilità (booleano). Crea una funzione che accetta un array di prodotti
come parametro e restituisce un nuovo array contenente solo i prodotti disponibili.*/

interface Prodotto{
    nome: string,
    prezzo: number,
    disponibilita: boolean
}
// let Prodotto1: Prodotto = {
//     nome: 'prod1',
//     prezzo: 23,
//     disponibilità: false
// }

// let Prodotto2: Prodotto = {
//     nome: 'prod2',
//     prezzo: 10,
//     disponibilità: true
// }

// let Prodotto3: Prodotto = {
//     nome: 'prod3',
//     prezzo: 55,
//     disponibilità: true
// }

// let Prodotto4: Prodotto = {
//     nome: 'prod4',
//     prezzo: 22,
//     disponibilità: false
// }

// let Prodotto5: Prodotto = {
//     nome: 'prod5',
//     prezzo: 14,
//     disponibilità: true
// }

const arrayProdotti: Prodotto[] = [
    {nome: 'prod1', prezzo: 33, disponibilita: true},
    {nome: 'prod2', prezzo: 11, disponibilita: true},
    {nome: 'prod3', prezzo: 32, disponibilita: false},
    {nome: 'prod4', prezzo: 67, disponibilita: false},
    {nome: 'prod5', prezzo: 61, disponibilita: true},
    {nome: 'prod6', prezzo: 29, disponibilita: false}];

function disponibilitàProdotto(listaProdotti: Prodotto[]): Prodotto[]
{
    let prodottiDisponibili: Prodotto[] = [];
    prodottiDisponibili = listaProdotti.filter(p => p.disponibilita);
    return prodottiDisponibili;
}

console.log(disponibilitàProdotto(arrayProdotti));