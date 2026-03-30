import { Attivita } from "../types";

export function contaCompletate(attivita: Attivita[]): number {
  // Usa un ciclo for oppure while
  let conta: number = 0;
    for(let i = 0; i < attivita.length; i++)
    {
      if(attivita[i].completata)
      {
        conta++;
      }
    }
  return conta;
}

export function titoliConMinimoCaratteri(attivita: Attivita[], min: number): string[] {
  // Usa filter + map
  let attivitaFiltrate: Attivita[] = attivita.filter(a => a.titolo.length >= min);
  let titoli: string[] = attivitaFiltrate.map(a => a.titolo);
  return titoli;
}

export function primaDaRecuperare(attivita: Attivita[]): Attivita | undefined {
  // Usa find
  let attivitaNonCompletata = attivita.find(a => a.completata === false);
  return attivitaNonCompletata;
}
