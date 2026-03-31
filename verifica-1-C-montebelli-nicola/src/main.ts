import { corsi } from "./data/mockData";
import { descriviCorso, puoAccettareNuoveIscrizioni, creaRigaReport } from "./exercises/task1";
import { contaPresenti, titoliCorsiAttivi, cercaCorso, indicePrimoCorsoPieno, nomiConPunteggioMinimo, messaggioLivello } from "./exercises/task2";
import { stampaEsitoRicerca } from "./exercises/task3";
import { totalSeats, makeLabel } from "./debug/debug-01";
import { getBadge, salvaSimulato } from "./debug/debug-02";

function run(): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log("=== REPORT ===");
    console.log(descriviCorso(corsi[0]));
    console.log(puoAccettareNuoveIscrizioni(corsi[0]));
    console.log(creaRigaReport(corsi[1].titolo, corsi[1].docente));

    console.log("=== ARRAY ===");
    console.log(contaPresenti(corsi[0].id));
    console.log(titoliCorsiAttivi());
    console.log(cercaCorso(corsi[1].id));
    console.log(indicePrimoCorsoPieno());
    console.log(nomiConPunteggioMinimo(18));
    console.log(messaggioLivello("base"));

    console.log("=== PROMISE ===");
    stampaEsitoRicerca(corsi[0].id)
        .then(esito => {
          console.log(esito);

          console.log("=== DEBUG ===");
          console.log(totalSeats(corsi.map(c => c.posti)));
          console.log(makeLabel(corsi[0].titolo));
          console.log(getBadge("aperto"));

          return salvaSimulato("test");
        })
        .then(esito => {
          console.log(esito);
          resolve();
        })
        .catch(err => console.error(err));
  })
}


run()
    .then(() => console.log("=== END ==="))
    .catch(err => console.error(err));
