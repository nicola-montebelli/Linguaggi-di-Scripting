import { corsi } from "../data/mockData";
import { Corso } from "../models/types";

export function recuperaCorsoDaBackend(id: string): Promise<Corso> {
  return new Promise((resolve, reject) => {
    // TODO:
    // 1. se id è vuoto o contiene solo spazi -> reject("id non valido")
    // 2. dopo 300ms cerca il corso con find
    // 3. se trovato -> resolve(corso)
    // 4. se non trovato -> reject("corso non trovato")
    const recuperaCorsoDaBackend = () => {
      if(!id || id === " ")
      {
        reject("id non valido");
      }
    }
  });
}

export function stampaEsitoRicerca(id: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // TODO:
    // se il corso esiste:
    // "TROVATO: Web Base (12/15)"
    // se c'è errore:
    // "ERRORE: corso non trovato"
  });
}
