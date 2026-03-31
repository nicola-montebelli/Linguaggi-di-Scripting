import { corsi, iscrizioni } from "../data/mockData";
import { Corso, Iscrizione, Livello } from "../models/types";

export function contaPresenti(corsoId: string): number {
  // TODO:
  // usa un ciclo for
  let contati: number = 0;
  for(let i = 0; i < iscrizioni.length; i++)
  {
    if(iscrizioni[i].corsoId === corsoId && iscrizioni[i].presenteOggi)
    {
      contati++;
    }
  }
  return contati;
}

export const titoliCorsiAttivi = (): string[] => {
  // TODO:
  // usa filter + map
  let corsiFiltrati: Corso[] = corsi.filter(c => c.attivo === true);
  let titoli: string[] = corsiFiltrati.map(c => c.titolo);
  return titoli;
};
//alternativa del prof
/*
export const titoliCorsiAttivi = (): string[] => {
  // usa filter + map
  return corsi
      .filter(corso => corso.attivo)
      .map(corso => corso.titolo);
}; 
*/

export const cercaCorso = (id: string): Corso | undefined => {
  // TODO:
  // usa find
  let corsoTrovato = corsi.find(c => c.id === id);
  return corsoTrovato;
};

export const indicePrimoCorsoPieno = (): number => {
  // TODO:
  // usa findIndex
  return corsi.findIndex(c => c.iscritti >= c.posti);
};

export function nomiConPunteggioMinimo(minimo: number): string[] {
  // TODO:
  // usa filter + map
  let punteggiFiltrati: Iscrizione[] = iscrizioni.filter(i => i.punteggioIngresso >= minimo);
  let nomi: string[] = punteggiFiltrati.map(n => n.nomeStudente);
  return nomi;
}

export function messaggioLivello(livello: Livello): string {
  // TODO:
  // usa switch
  let stampaLivello: string;
  switch(livello)
  {
    case "base": stampaLivello = "Livello del corso base";
    break;

    case "medio": stampaLivello = "Livello del corso medio";
    break;

    case "alto": stampaLivello = "Livello del corso alto";
    break;

    default: stampaLivello = "Livello non valido";
    break;
  }
  return stampaLivello;
}
