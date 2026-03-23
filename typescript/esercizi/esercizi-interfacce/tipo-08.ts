/*Crea un'interfaccia per rappresentare un animale con le seguenti proprietà: 
nome (stringa), specie (stringa) e numero di zampe (numero). 
Crea una funzione che accetta un array di animali come parametro 
e restituisce un nuovo array contenente solo gli animali che hanno quattro zampe.*/


interface Animale{
    nome: string,
    specie: string,
    zampe: number
}

let Animale1: Animale = {
    nome: "tigre",
    specie: "felina",
    zampe: 4
}

let Animale2: Animale = {
    nome: "gatto",
    specie: "felina",
    zampe: 4
}

let Animale3: Animale = {
    nome: "trota",
    specie: "pesce",
    zampe: 0
}

let Animale4: Animale = {
    nome: "ragno",
    specie: "aracnide",
    zampe: 8
}

let Animale5: Animale = {
    nome: "cane",
    specie: "canide",
    zampe: 4
}

let Animale6: Animale = {
    nome: "pappagallo",
    specie: "volatile",
    zampe: 2
}

let Animale7: Animale = {
    nome: "merluzzo",
    specie: "pesce",
    zampe: 0
}

const animali: Animale[] = [Animale1, Animale2, Animale3, Animale4, Animale5, Animale6, Animale7];

function trovaAnimali(lista: Animale[]): Animale[]
{
    let animaliTrovati: Animale[] = [];
    animaliTrovati = lista.filter(animale => animale.zampe == 4);
    return animaliTrovati;
}

console.log(trovaAnimali(animali));