import { attivita } from "../data";
import { Attivita, ReportAttivita } from "../types";

export function messaggioAccesso(ruolo: string,attivo: boolean): string {
  // Se attivo è false, restituisci "Utente non attivo"
  // Se attivo è true, usa switch su ruolo:
  // docente -> "Accesso docente consentito"
  // studente -> "Accesso studente consentito"
  // ospite -> "Accesso ospite limitato"
  // default -> "Ruolo non riconosciuto"
  if(!attivo)
  {
    return "Utente non attivo";
  }
  else
  {
    switch(ruolo)
    {
      case 'docente': return  "Accesso docente consentito";
      case 'studente': return "Accesso studente consentito";
      case 'ospite': return "Accesso ospite limitato";
      default: return "Ruolo non riconosciuto";
    }
  }
}

export function minutiPerCategoria(attivita: Attivita[],categoria: Attivita["categoria"]): number {
  // Usa un ciclo while oppure for
  let sommaMinuti: number = 0;
  for(let i = 0; i < attivita.length; i++)
  {
    if(categoria === attivita[i].categoria)
    {
      sommaMinuti += attivita[i].minuti;
    }
  }
  return sommaMinuti;
}

export const creaReport = (attivita: Attivita[],prefisso: string = "REP"): ReportAttivita[] => {
  // Restituisci un array di oggetti:
  // { etichetta: `${prefisso}-${id}`, minuti: minuti }
  return attivita.map(/*(id,minuti)*/a =>({
    etichetta: `${prefisso}-${a.id}`,
    minuti: a.minuti
  }));
};