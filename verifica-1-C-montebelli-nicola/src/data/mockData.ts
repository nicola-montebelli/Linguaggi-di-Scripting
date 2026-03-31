import { Corso, Iscrizione } from "../models/types";

export const corsi: Corso[] = [
  { id: "UX1", titolo: "UX per Sviluppatori", livello: "base", posti: 13, iscritti: 9, attivo: true, docente: "Gallo" },
  { id: "JSB", titolo: "JS di Base", livello: "base", posti: 12, iscritti: 6, attivo: false },
  { id: "API1", titolo: "API e Dati", livello: "medio", posti: 9, iscritti: 9, attivo: true, docente: "Costa" }
];

export const iscrizioni: Iscrizione[] = [
  { id: 1, nomeStudente: "Irene", corsoId: "UX1", presenteOggi: true, punteggioIngresso: 16 },
  { id: 2, nomeStudente: "Leo", corsoId: "UX1", presenteOggi: true, punteggioIngresso: 18 },
  { id: 3, nomeStudente: "Mina", corsoId: "JSB", presenteOggi: false, punteggioIngresso: 20 },
  { id: 4, nomeStudente: "Omar", corsoId: "API1", presenteOggi: true, punteggioIngresso: 22 },
  { id: 5, nomeStudente: "Pina", corsoId: "API1", presenteOggi: false, punteggioIngresso: 19 }
];
