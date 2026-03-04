//Hello World + Funzione saluto
console.log("Hello World!");

function saluto(msg: string) 
{
    console.log("Ciao " + msg);
}

//Boolean
let fatto: boolean = true;

//dichiarazione implicita
let fatto2 = false;

let fatto3: boolean;
fatto3 = true;

fatto2 = fatto3;

//Number
let anno: number = 2018;
//anno = "1970" Errore!

//String
let colore :string = "rosso";

//Array
let elenco: number[] = [1, 2, 3, 4, 5];  //Errore se dentro un array tipizzato a number ci mettiamo un numero tra apici
let elenco2: Array<number> = [1, 2, 3, 4]; //Sintassi formale

//Tupla
let indirizzo: [string, number];
indirizzo = ["Corso D'Augusto", 4];

let indirizzo2: (string | number)[];
indirizzo2 = ["Pippo Baudo", "Via Arno", 11, "interno X"];

//Enum
enum Colore{
    Rosso,
    Blu,
    Verde
}
let c: Colore = Colore.Blu;  //c in questo caso ha valore 1 ->  Rosso = 0, Blu = 1, Verde = 2

enum HTTPStatus{
    OK = 200,           //in questo modo diamo noi dei valori agli enumeratori
    BAD_REQUEST = 400,
    NOT_AUTENTHICATED = 401,
    NOT_PERMITTED = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}
let httpStatus: HTTPStatus;
httpStatus = HTTPStatus.OK;
console.log("httpstatus: " + httpStatus);

enum HTTPStatusMEssage{
    OK = "200 - OK",         
    BAD_REQUEST = "400 - richiesta sbagliata",
    //...
}

enum coloreCSS{
    rosso = "#f00",
}

//Oggetto
let macchina:{
    marca: string,
    modello: string,
    anno: number
};

macchina = {
    marca: "Ford",
    modello: "S-max",
    anno: 2009
};

let macchina2 = {
    marca: "Ford",
    modello: "S-max",
    anno: 2009
};
macchina2 = {
    marca: "Toyota",
    modello: "Yaris",
    anno: 2026
};

let garage: {
    marca: string,
    modello: string,    //array di oggetti
    anno: number
}[];
//oppure 
let garage2: Array<{
    marca: string,
    modello: string,
    anno: number
}>;

garage = [macchina, macchina2];

let macchina3:{
    marca: string,
    modello: string,
    anno?: number     //parametro facoltativo
} = {
    marca: "Tesla",
    modello: "Y"
};
//macchina = macchina3;  Errore
macchina  = {       //alternativa per sopperire all'errore
    marca: macchina3.marca,
    modello: macchina3.modello,
    anno: 2026
};

macchina3 = macchina;


//null, undefined, any, void

//any
let qualunque: any;
qualunque = 44;
qualunque = "ciao";
qualunque = true;
qualunque = Colore.Blu;

//null
let niente: null;
// niente = 4;
// niente = "44";       Errori
// niente = undefined;
niente = null;

//undefined
let nonDefinita: undefined;
nonDefinita = undefined;

//void
let varVoid: void;
//questa funzione non ritorna niente quindi metto :void
function funzione_che_ritorna_nulla(parametro1: string): void{
    //return non previsto
}
//questa funzione ritorna qualcosa quindi metto :il tipo che mi serve
function funzione_che_ritorna(parametro1: string): string{
    return "valore ritornato";  //retun previsto
}


//Composizione dei tipi
let nome: string | null;
nome = null;
//nome = 4;
nome = "Pippo";

let variabileFacoltativa: string | boolean | null;
//variabileFacoltativa = Colore.Blu;
variabileFacoltativa = "ok";

//tipi di dato personalizzato
type Permissivo = string | boolean | number[] | null;
let variabileStrana: Permissivo;
variabileStrana = [1, 2, 3];
variabileStrana = "1, 2, 3";


type Status = "success"|"error"|"loading";
let statoProgramma: Status = "success";
//statoProgramma = "errore";   Errore

type UserData = {
    id: number;
    firstName: string;
    lastName: string;
    birthdate?: string;
}
let User1: UserData = {
    id: 1,
    firstName: "Pippo",
    lastName: "Buaden",
    birthdate: "23/04/1990"
};

type UserAddress  = {
    address: string;
    city: string;
    country: string;
    state?: string;
}

type UserProfile = UserData & UserAddress;
let userProfile: UserProfile;

userProfile = {
    id: 2,
    firstName: "Franco",        //in questo modo bisogna mettere tutti i valori obbligatori 
    lastName: "Francato",
    address: "via Flaminia, 33",
    city: "Rimini",
    country: "Italy"
}
userProfile.state = "RN";  //si possono inserire successivamente parametri facoltativi esistenti
//userProfile.provincia = "RN"; //Errore .provincia non esiste


type WebUser = {
    account: {
        username: string;
        password: string;
    };

    personalData: UserData;
    addressList?: UserAddress[];
}

let webuser: WebUser = {
    account: { username: "admin", password: "12345678" },
    personalData: {
        id: 3,
        firstName: "AAAA",
        lastName: "BBBB"
    }
}


// interface
type UtenteSito = {
    account: {
        username: string;
        password: string;
    },

    nome: string;
    cognome: string;
}
let utente: UtenteSito = {
    account: {
        username: "operatore",
        password: "nonlaso"
    },
    nome: "eeee",
    cognome: "bbbbb"
}

// variabili non completamente compatibili
// utente = webuser;

// ma se mi interessa solamente il sotto insieme di attributi
// comuni ai 2 diversi tipi, posso definire una "interface"
// che contiene gli attributi di mio interesse.
interface Account {
    account: {
        username: string;
        password: string;    
    }
}

// supponiamo di dover scrivere una funzione che controlla
// se l'account (di un oggetto UtenteSito o di un WebUser)
// è un admin.

// Per fare il controllo su entrambi i tipi di dato
// dovrei scrivare 2 funzioni praticamente identiche salvo
// il tipo di parametro accettato.
function controllaAdminUtenteSito(u: UtenteSito): boolean {
    if (u.account.username === "admin" && u.account.password === "12345678") {
        return true;
    } else {
        return false;
    }
}

function controllaAdminWebUser(u: WebUser): boolean {
    if (u.account.username === "admin" && u.account.password === "12345678") {
        return true;
    } else {
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
function controllaAdmin(u: Account): boolean {
    if (u.account.username === "admin" && u.account.password === "12345678") {
        return true;
    } else {
        return false;
    }
}
controllaAdmin(utente);
controllaAdmin(webuser);



// anche le funzioni sono dei tipi di dato
function somma(a: number, b: number): number {
    return a + b;
}

function sottrazione(a: number, b: number): number {
    return a - b;
}

function moltiplicazione(a: number, b: number): number {
    return a * b;
}

function inverti(a: number): number {
    return -a;
}

type OP = (a: number, b: number) => number;     //al tipo di dato corrisponde una funzione con dei parametri
let operazione: OP = somma;
console.log("Somma: ", operazione(3, 6));

// operazione = inverti;
// console.log("Inversione: ", operazione(3));  //Errore



type OpAndMore = {
    name: string;
    operation: (a: number, b: number) => number;
}

let om: OpAndMore = {
    name: "somma",
    operation: somma,
}
console.log(om.name, om.operation(2, 5));

//funzioni "anonime" o funzioni "freccia"
om.operation = function asgah(a: number, b: number): number {
    return a-b;
};
//oppure si può scrivere così.  La parola chiave 'function' e il nome della funzione si possono omettere ma dopo il tipo di return (:number) va messa la freccia =>
om.operation = (a: number, b: number): number => {
    return a-b;
};

//let r = sottrazione(4, 5);
console.log(om.name, om.operation(2, 5));


// il vantaggio maggiore nell'avere la possibilità di passare delle funzioni
// come parametro lo si può apprezzare nelle funzioni:

setTimeout(() => {
    console.log("Questo messaggio arriverà dopo 10 secondi");
}, 10000);

console.log("Questo messaggio arriverà subito");