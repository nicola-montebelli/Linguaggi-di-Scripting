/*Crea un'interfaccia per rappresentare un libro con le seguenti proprietà: 
titolo (stringa), autore (stringa), anno di pubblicazione (numero) e genere (stringa). 
Crea un array di libri e scrivi una funzione che accetta un genere come parametro 
e restituisce un nuovo array contenente solo i libri del genere specificato.*/

interface Libro{
    titolo: string,
    autore: string,
    anno: number,
    genere: string
}

let Libro1: Libro = {
    titolo: "Bel Panorama",
    autore: "Giorgio",
    anno: 2020,
    genere: "avventura"
}
let Libro2: Libro = {
    titolo: "Colline Silenti",
    autore: "Yuva",
    anno: 1999,
    genere: "horror"
}
let Libro3: Libro = {
    titolo: "Residenti Malvagi",
    autore: "Miaky",
    anno: 1996,
    genere: "horror"
}
let Libro4: Libro = {
    titolo: "Avventura nello spazio",
    autore: "Michele",
    anno: 2005,
    genere: "avventura"
}
let Libro5: Libro = {
    titolo: "Sorrisi dal cielo",
    autore: "Anna",
    anno: 2016,
    genere: "romantico"
}
let Libro6: Libro = {
    titolo: "LA Police",
    autore: "John",
    anno: 2019,
    genere: "thriller"
}

const arrayLibri: Libro[] = [Libro1, Libro2, Libro3, Libro4, Libro5, Libro6];

function trovaGenere(lista: Libro[], gen: string): Libro[]
{
    gen = gen.toLowerCase();
    let genereLibri: Libro[] = [];
    genereLibri = lista.filter(libro => libro.genere == gen);
    return genereLibri;
}

console.log(trovaGenere(arrayLibri, "HorrOr"));

