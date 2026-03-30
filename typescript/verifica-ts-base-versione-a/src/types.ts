export interface Attivita {
  id: number; // TODO: sostituisci any
  titolo: string; // TODO: sostituisci any
  categoria:  "ts" | "js" | "web"; // TODO: sostituisci any con unione di stringhe
  minuti: number; // TODO: sostituisci any
  completata: boolean; // TODO: sostituisci any
}

export interface ReportAttivita {
  etichetta: string;
  minuti: number;
}
