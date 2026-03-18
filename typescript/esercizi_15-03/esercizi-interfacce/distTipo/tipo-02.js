"use strict";
/* Crea un tipo di dato enum per rappresentare i giorni della settimana. Scrivi una funzione che accetta un giorno
della settimana come parametro e stampa un messaggio di saluto appropriato in base al giorno.*/
Object.defineProperty(exports, "__esModule", { value: true });
var Giorno;
(function (Giorno) {
    Giorno[Giorno["Lunedi"] = 0] = "Lunedi";
    Giorno[Giorno["Martedi"] = 1] = "Martedi";
    Giorno[Giorno["Mercoledi"] = 2] = "Mercoledi";
    Giorno[Giorno["Giovedi"] = 3] = "Giovedi";
    Giorno[Giorno["Venerdi"] = 4] = "Venerdi";
    Giorno[Giorno["Sabato"] = 5] = "Sabato";
    Giorno[Giorno["Domenica"] = 6] = "Domenica";
})(Giorno || (Giorno = {}));
function buonGiorno(gg) {
    let saluto = '';
    switch (gg) {
        case Giorno.Lunedi:
            saluto = 'Buon inizio di settimana';
            break;
        case Giorno.Martedi:
            saluto = 'Buon Martedì';
            break;
        case Giorno.Mercoledi:
            saluto = 'Dai che siamo a metà settimana';
            break;
        case Giorno.Giovedi:
            saluto = 'Buon Giovedì';
            break;
        case Giorno.Venerdi:
            saluto = 'Buon week-end';
            break;
        case Giorno.Sabato:
            saluto = 'Ciao stasera usciamo?';
            break;
        case Giorno.Domenica:
            saluto = 'Ciao ciao week-end :(';
            break;
    }
    return saluto;
}
console.log(buonGiorno(Giorno.Lunedi));
console.log(buonGiorno(Giorno.Martedi));
console.log(buonGiorno(Giorno.Mercoledi));
console.log(buonGiorno(Giorno.Giovedi));
console.log(buonGiorno(Giorno.Venerdi));
console.log(buonGiorno(Giorno.Sabato));
console.log(buonGiorno(Giorno.Domenica));
//# sourceMappingURL=tipo-02.js.map