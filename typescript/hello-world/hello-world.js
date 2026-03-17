//Hello World + Funzione saluto
console.log("Hello World!");
function saluto(msg) {
    console.log("Ciao " + msg);
}
//Boolean
var fatto = true;
//dichiarazione implicita
var fatto2 = false;
var fatto3;
fatto3 = true;
fatto2 = fatto3;
//Number
var anno = 2018;
//anno = "1970" Errore!
//String
var colore = "rosso";
//Array
var elenco = [1, 2, 3, 4, 5]; //Errore se dentro un array tipizzato a number ci mettiamo un numero tra apici
var elenco2 = [1, 2, 3, 4]; //Sintassi formale
//Tupla
var indirizzo;
indirizzo = ["Corso D'Augusto", 4];
var indirizzo2;
indirizzo2 = ["Pippo Baudo", "Via Arno", 11, "interno X"];
//Enum
var Colore;
(function (Colore) {
    Colore[Colore["Rosso"] = 0] = "Rosso";
    Colore[Colore["Blu"] = 1] = "Blu";
    Colore[Colore["Verde"] = 2] = "Verde";
})(Colore || (Colore = {}));
var c = Colore.Blu; //c in questo caso ha valore 1 ->  Rosso = 0, Blu = 1, Verde = 2
var HTTPStatus;
(function (HTTPStatus) {
    HTTPStatus[HTTPStatus["OK"] = 200] = "OK";
    HTTPStatus[HTTPStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTPStatus[HTTPStatus["NOT_AUTENTHICATED"] = 401] = "NOT_AUTENTHICATED";
    HTTPStatus[HTTPStatus["NOT_PERMITTED"] = 403] = "NOT_PERMITTED";
    HTTPStatus[HTTPStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTPStatus[HTTPStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HTTPStatus || (HTTPStatus = {}));
var httpStatus;
httpStatus = HTTPStatus.OK;
console.log("httpstatus: " + httpStatus);
var HTTPStatusMEssage;
(function (HTTPStatusMEssage) {
    HTTPStatusMEssage["OK"] = "200 - OK";
    HTTPStatusMEssage["BAD_REQUEST"] = "400 - richiesta sbagliata";
    //...
})(HTTPStatusMEssage || (HTTPStatusMEssage = {}));
var coloreCSS;
(function (coloreCSS) {
    coloreCSS["rosso"] = "#f00";
})(coloreCSS || (coloreCSS = {}));
//Oggetto
var macchina;
macchina = {
    marca: "Ford",
    modello: "S-max",
    anno: 2009
};
var macchina2 = {
    marca: "Ford",
    modello: "S-max",
    anno: 2009
};
macchina2 = {
    marca: "Toyota",
    modello: "Yaris",
    anno: 2026
};
var garage;
//oppure 
var garage2;
garage = [macchina, macchina2];
var macchina3 = {
    marca: "Tesla",
    modello: "Y"
};
//macchina = macchina3;  Errore
macchina = {
    marca: macchina3.marca,
    modello: macchina3.modello,
    anno: 2026
};
macchina3 = macchina;
//null, undefined, any, void
//any
var qualunque;
qualunque = 44;
qualunque = "ciao";
qualunque = true;
qualunque = Colore.Blu;
//null
var niente;
// niente = 4;
// niente = "44";       Errori
// niente = undefined;
niente = null;
//undefined
var nonDefinita;
nonDefinita = undefined;
//void
var varVoid;
//questa funzione non ritorna niente quindi metto :void
function funzione_che_ritorna_nulla(parametro1) {
    //return non previsto
}
//questa funzione ritorna qualcosa quindi metto :il tipo che mi serve
function funzione_che_ritorna(parametro1) {
    return "valore ritornato"; //retun previsto
}
//Composizione dei tipi
var nome;
nome = null;
//nome = 4;
nome = "Pippo";
var variabileFacoltativa;
//variabileFacoltativa = Colore.Blu;
variabileFacoltativa = "ok";
var variabileStrana;
variabileStrana = [1, 2, 3];
variabileStrana = "1, 2, 3";
var statoProgramma = "success";
var User1 = {
    id: 1,
    firstName: "Pippo",
    lastName: "Buaden",
    birthdate: "23/04/1990"
};
var userProfile;
userProfile = {
    id: 2,
    firstName: "Franco", //in questo modo bisogna mettere tutti i valori obbligatori 
    lastName: "Francato",
    address: "via Flaminia, 33",
    city: "Rimini",
    country: "Italy"
};
userProfile.state = "RN"; //si possono inserire successivamente parametri facoltativi esistenti
var webuser = {
    account: { username: "admin", password: "12345678" },
    personalData: {
        id: 3,
        firstName: "AAAA",
        lastName: "BBBB"
    }
};
var utente = {
    account: {
        username: "operatore",
        password: "nonlaso"
    },
    nome: "eeee",
    cognome: "bbbbb"
};
// supponiamo di dover scrivere una funzione che controlla
// se l'account (di un oggetto UtenteSito o di un WebUser)
// è un admin.
// Per fare il controllo su entrambi i tipi di dato
// dovrei scrivare 2 funzioni praticamente identiche salvo
// il tipo di parametro accettato.
function controllaAdminUtenteSito(u) {
    if (u.account.username === "admin" && u.account.password === "12345678") {
        return true;
    }
    else {
        return false;
    }
}
function controllaAdminWebUser(u) {
    if (u.account.username === "admin" && u.account.password === "12345678") {
        return true;
    }
    else {
        return false;
    }
}
controllaAdminUtenteSito(utente);
// controllaAdminUtenteSito(webuser);   // errore
controllaAdminWebUser(webuser);
// controllaAdminWebUser(utente);  // errore
// utilizzando l'interfaccia che comprende i campi identici
// tra i 2 tipi, posso definire una unica funzione che accetta
// come parametro un oggetto dell'interfaccia
function controllaAdmin(u) {
    if (u.account.username === "admin" && u.account.password === "12345678") {
        return true;
    }
    else {
        return false;
    }
}
controllaAdmin(utente);
controllaAdmin(webuser);
// anche le funzioni sono dei tipi di dato
function somma(a, b) {
    return a + b;
}
function sottrazione(a, b) {
    return a - b;
}
function moltiplicazione(a, b) {
    return a * b;
}
function inverti(a) {
    return -a;
}
var operazione = somma;
console.log("Somma: ", operazione(3, 6));
var om = {
    name: "somma",
    operation: somma,
};
console.log(om.name, om.operation(2, 5));
//funzioni "anonime" o funzioni "freccia"
om.operation = function asgah(a, b) {
    return a - b;
};
//oppure si può scrivere così.  La parola chiave 'function' e il nome della funzione si possono omettere ma dopo il tipo di return (:number) va messa la freccia =>
om.operation = function (a, b) {
    return a - b;
};
//let r = sottrazione(4, 5);
console.log(om.name, om.operation(2, 5));
// il vantaggio maggiore nell'avere la possibilità di passare delle funzioni
// come parametro lo si può apprezzare nelle funzioni:
setTimeout(function () {
    console.log("Questo messaggio arriverà dopo 10 secondi");
}, 10000);
console.log("Questo messaggio arriverà subito");
