"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparable_model_1 = require("./comparable.model");
class Utente {
    constructor(nome, telephone) {
        this.nome = nome;
        this.telephone = telephone;
        this.compareTo = (a, b) => {
            if (a.nome === b.nome)
                return 0;
            if (a.nome < b.nome)
                return -1;
            return 1;
        };
    }
}
class Address {
    constructor(address, city, state, country) {
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.compareTo = (a, b) => {
            if (a.address === b.address)
                return 0;
            if (a.address < b.address)
                return -1;
            return 1;
        };
    }
}
let listaUtenti = [
    new Utente("Leonardo"),
    new Utente("Elena", "1245125"),
    new Utente("Xiaowei", "1245125"),
    new Utente("Monica", "1245125"),
    new Utente("Niccolò", "1245125"),
    new Utente("Miti Ray", "1245125"),
    new Utente("Anita", "1245125"),
];
let listaIndirizzi = [
    new Address("via Flaminia"),
    new Address("via Arno"),
    new Address("via Modena"),
    new Address("via Roma"),
    new Address("via Caduti di Marzabotto"),
];
console.log("Utenti: ", listaUtenti);
console.log("================");
console.log("Utenti: ", (0, comparable_model_1.ordinaArray)(listaUtenti));
console.log("================");
console.log("Indirizzi: ", listaIndirizzi);
console.log("================");
console.log("Indirizzi: ", (0, comparable_model_1.ordinaArray)(listaIndirizzi));
console.log("================");
