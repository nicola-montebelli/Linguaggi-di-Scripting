import { Comparable, ordinaArray } from "./comparable.model";


class Utente implements Comparable {
    constructor(public nome: string, public telephone?: string) {
    }

    compareTo: (a: any, b: any) => number =  (a: any, b: any): number => {
        if (a.nome === b.nome) return 0;
        if (a.nome < b.nome) return -1;
        return 1;
    };  
}

class Address {
    constructor(
        public address: string,
        public city?: string,
        public state?: string,
        public country?: string
    ) {

    }

    compareTo: (a: any, b: any) => number =  (a: any, b: any): number => {
        if (a.address === b.address) return 0;
        if (a.address < b.address) return -1;
        return 1;
    };

}




let listaUtenti = [
    new Utente("Leonardo"),
    new Utente("Elena", "1245125"),
    new Utente("Xiaowei", "1245125"),
    new Utente("Monica", "1245125"),
    new Utente("Niccolò", "1245125"),
    new Utente("Miti Ray", "1245125"),
    new Utente("Anita", "1245125"),    
]

let listaIndirizzi = [
    new Address("via Flaminia"),
    new Address("via Arno"),
    new Address("via Modena"),
    new Address("via Roma"),
    new Address("via Caduti di Marzabotto"),    
];


console.log("Utenti: ", listaUtenti);
console.log("================");
console.log("Utenti: ", ordinaArray(listaUtenti));
console.log("================");



console.log("Indirizzi: ", listaIndirizzi);
console.log("================");
console.log("Indirizzi: ", ordinaArray(listaIndirizzi));
console.log("================");

