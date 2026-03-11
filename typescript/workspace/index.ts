import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");


//Classi e Oggetti slide 42+
class Person{
    name: string;
    private type?: string = "Studente";     //gli attributi facoltativi(?) possono essere inizializzati in queso modo
    protected age: number;

    constructor(name: string, age: number){     //tutti gli attributi obbligatori vanno nel costruttore
        this.name = name;
        this.age = age;
    }

    saluta(){
        console.log(`Ciao, sono ${p.name} ed ho ${p.age} anni`);
    }
}

let p: Person = new Person("Nicola", 27);
console.log("nome: " + p.name);

p.name = "giuseppe";        //dato che name è public posso cambiarne il valore
console.log("nome: " + p.name);
p.saluta();
// console.log(p.type);  //Errore - type è definita privata

// console.log(p.age);  //Errore - age è definita protected





//MODULI in slide 48
//INTERFACCE in slide 49+