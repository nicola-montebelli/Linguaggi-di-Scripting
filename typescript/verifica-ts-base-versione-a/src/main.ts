import { attivita, impostazioni } from "./data";
import {
  contaCompletate,
  titoliConMinimoCaratteri,
  primaDaRecuperare
} from "./tasks/01_registro";
import {
  messaggioAccesso,
  minutiPerCategoria,
  creaReport
} from "./tasks/02_statistiche";
import { simulaSalvataggio } from "./tasks/03_async";

console.log("VERSIONE:", impostazioni.versione);
console.log("Completate:", contaCompletate(attivita));
console.log(
  "Titoli lunghi:",
  titoliConMinimoCaratteri(attivita, impostazioni.minCaratteriTitolo)
);
console.log(
  "Prima da recuperare:",
  primaDaRecuperare(attivita)?.titolo ?? "nessuna"
);
console.log(
  "Accesso:",
  messaggioAccesso(impostazioni.ruoloTest, impostazioni.utenteAttivo)
);
console.log("Minuti TS:", minutiPerCategoria(attivita, "ts"));
console.log("Report:", creaReport(attivita, impostazioni.prefissoReport));

simulaSalvataggio(impostazioni.fileDaSalvare, impostazioni.fileValido)
  .then((messaggio) => console.log("Promise OK:", messaggio))
  .catch((errore) => console.log("Promise KO:", errore));
