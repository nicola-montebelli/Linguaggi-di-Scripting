import { Corso } from "../models/types";
import { titoliCorsiAttivi } from "./task2";

export const descriviCorso = (corso: Corso, prefisso = "Corso"): string => {
  // TODO:
  // formato richiesto:
  // "Corso Web Base [base] - 12/15 iscritti - ATTIVO"
  // oppure
  // "Corso JS Pratico [medio] - 7/10 iscritti - NON ATTIVO"
  return prefisso + " " + corso.titolo + " " + corso.livello + " - " + corso.iscritti + "/" + corso.posti + " - " + corso.attivo;
};

export function puoAccettareNuoveIscrizioni(corso: Corso, sogliaMinima?: number): boolean {
  // TODO:
  // se sogliaMinima non è definita, usare 1
  // restituisci true solo se:
  // - corso.attivo è true
  // - posti liberi >= sogliaMinima
  const soglia = sogliaMinima ?? 1;
  if(corso.attivo && corso.posti >= soglia)
  {
    return true
  }
  else{
    return false;
  }
}

export const creaRigaReport = (titolo: string, docente?: string): string => {
  // TODO:
  // se docente manca, usa "docente da assegnare"
  // formato: "Titolo: Web Base | Docente: Rossi"
  if(!docente)
  {
    return "docente da assegnare";
  }
  return "Titolo: " + titolo +  " | " + "Docente: " + docente;
};
