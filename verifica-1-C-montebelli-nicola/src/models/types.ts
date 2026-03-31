export type Livello = "base" | "medio" | "alto";

export interface Corso {
  id: string;
  titolo: string;
  livello: Livello;
  posti: number;
  iscritti: number;
  attivo: boolean;
  docente?: string;
}

export interface Iscrizione {
  id: number;
  nomeStudente: string;
  corsoId: string;
  presenteOggi: boolean;
  punteggioIngresso: number;
}
