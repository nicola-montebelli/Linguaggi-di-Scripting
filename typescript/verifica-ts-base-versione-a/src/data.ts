import { Attivita } from "./types";

export const attivita: Attivita[] = [
  { id: 1, titolo: "Variabili base", categoria: "web", minuti: 15, completata: true },
  { id: 2, titolo: "Tipi primitivi", categoria: "ts", minuti: 20, completata: true },
  { id: 3, titolo: "Array e map", categoria: "js", minuti: 25, completata: false },
  { id: 4, titolo: "Promise base", categoria: "ts", minuti: 30, completata: false },
  { id: 5, titolo: "Import export", categoria: "js", minuti: 10, completata: true }
];

export const impostazioni = {
  versione: "A",
  minCaratteriTitolo: 12,
  ruoloTest: "studente",
  utenteAttivo: true,
  prefissoReport: "LABA",
  fileDaSalvare: "reportA.txt",
  fileValido: true
};
