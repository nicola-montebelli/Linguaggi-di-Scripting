"use strict";
/* Definisci un'interfaccia per rappresentare una persona con le seguenti proprietà:
  nome (stringa), età (numero) e indirizzo (oggetto con proprietà strada, città e stato).
  Crea una funzione che accetta un'istanza di questa interfaccia come parametro e stampa le proprietà della persona.*/
Object.defineProperty(exports, "__esModule", { value: true });
function stampaPersona(persona) {
    console.log("Nome: " + persona.nome);
    console.log("Età: " + persona.età);
    console.log("Indirizzo: " + persona.indirizzo.strada + ", " + persona.indirizzo.città + ", " + persona.indirizzo.stato);
}
const persona1 = {
    nome: "Nicola",
    età: 27,
    indirizzo: {
        strada: "Via Morgagni",
        città: "Rimini",
        stato: "Italia"
    }
};
stampaPersona(persona1);
//Metodo alternativo
/* interface Indirizzo {
  strada: string;
  citta: string;
  stato: string;
}

interface Persona {
  nome: string;
  eta: number;
  indirizzo: Indirizzo;
}*/
//Funzione
/*function stampaPersona(persona: Persona): void {
  console.log("Nome:", persona.nome);
  console.log("Età:", persona.eta);
  console.log("Strada:", persona.indirizzo.strada);
  console.log("Città:", persona.indirizzo.citta);
  console.log("Stato:", persona.indirizzo.stato);
}*/
//Esempio
/* const persona1: Persona = {
  nome: "Mario Rossi",
  eta: 30,
  indirizzo: {
    strada: "Via Roma 10",
    citta: "Milano",
    stato: "Italia"
  }
};

stampaPersona(persona1);*/ 
//# sourceMappingURL=tipo-01.js.map