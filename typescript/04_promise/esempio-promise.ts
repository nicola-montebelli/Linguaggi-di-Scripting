
//
// creo una funzione handler Promise che mi simula la chiamata
// alla API di interrogazione meteo
//
const handler = (resolve: (val: string)=>void, reject: (val: string)=>void) => {

    let valore: string | null = null;

    // calcolo che impiega del tempo
    // es. un download che dentro valore inserisce
    // la previsione del tempo in città, esempio
    //
    if (Math.random() > 0.4) {
        valore = "Pioggia";
    } else if (Math.random() > 0.8) {
        valore = "Sereno";
    } else {
        valore = null;
    }

    if (valore != null) {
        resolve(valore);
    } else {
        reject("Errore nella consultazione del meteo.");
    }
}


function consultaPrevisioni(city: string): Promise<string> {
    // simuliamo la chiamata all'API di Meteo.it
    return new Promise(handler);
}


//
// il nostro codice normale comincerebbe da qui:
//
let previsione = consultaPrevisioni("Rimini");

previsione
    .then((risultato) => {
        console.log("(1) A Rimini è previsto " + risultato);
    })
    .catch((errore) => {
        console.log("(1) Non è possibile determinare la previsione a Rimini: " + errore);
    });


console.log("Avviato richiesta di previsione meteo per la città di Rimini");


setTimeout(
    () => {
        previsione
            .then((risultato) => {
                console.log("(2) A Rimini è previsto " + risultato);
            })
            .catch((errore) => {
                console.log("(2) Non è possibile determinare la previsione a Rimini: " + errore);
            });
    },
    5000
)


let previsione3 = consultaPrevisioni("Rimini");
previsione3
    .then((risultato) => {
        console.log("(3) A Rimini è previsto " + risultato);
    })
    .catch((errore) => {
        console.log("(3) Non è possibile determinare la previsione a Rimini: " + errore);
    });
