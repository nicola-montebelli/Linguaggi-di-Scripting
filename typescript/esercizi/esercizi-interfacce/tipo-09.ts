/*Definisci un tipo di dato primitivo per rappresentare un indirizzo email. 
L'input dovrebbe essere una stringa con il formato "nomeutente@dominio.com". 
Crea una funzione che accetta un indirizzo email come parametro e restituisce true se il formato è corretto e false altrimenti. */

let email: string = "nicola.montebelli@gmail.com";
let email2: string = "pippo+baudo@mail.it";
let email3: string = "mario_rossi@_gmail.eu";
let email4: string = "Luigi.Verdi_77@virgilio.it";

function validaMail(m: string): boolean
{
    let mailValidata: boolean = false;
    let pattern = new RegExp(/^([\w-.]+)@([a-z][^_]+)\.([a-z]{2,})/g);
    mailValidata = pattern.test(m);
    return mailValidata;
}

console.log(validaMail(email));
console.log(validaMail(email2));
console.log(validaMail(email3));
console.log(validaMail(email4));
