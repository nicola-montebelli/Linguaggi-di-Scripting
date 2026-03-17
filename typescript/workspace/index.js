"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jspdf_1 = require("jspdf");
// Default export is a4 paper, portrait, using millimeters for units
var doc = new jspdf_1.jsPDF();
doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");
//Classi e Oggetti slide 42+
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.type = "Studente"; //gli attributi facoltativi(?) possono essere inizializzati in queso modo
        this.name = name;
        this.age = age;
    }
    Person.prototype.saluta = function () {
        console.log("Ciao, sono ".concat(p.name, " ed ho ").concat(p.age, " anni"));
    };
    return Person;
}());
var p = new Person("Nicola", 27);
console.log("nome: " + p.name);
p.name = "giuseppe"; //dato che name è public posso cambiarne il valore
console.log("nome: " + p.name);
p.saluta();
// console.log(p.type);  //Errore - type ha visibilità privata
// console.log(p.age);  //Errore - age ha visibilità protected
