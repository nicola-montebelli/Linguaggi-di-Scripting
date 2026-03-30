import { Attivita } from "../types";

const voce: Attivita = {
  id: 7,
  titolo: "Ripasso find",
  categoria: "ts",
  minuti: 25,
  completata: false
};

function descrivi(voce: Attivita): string {
  if (voce.completata = true) {
    return `${voce.titolo} completata in ${voce.minuti} minuti`;
  }
  return `${voce.titolo} da completare`;
}

console.log(descrivi(voce));
