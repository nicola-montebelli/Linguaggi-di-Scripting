/* Definisci un tipo di dato per rappresentare il nome di un contatto ed il relativo numero di telefono.
Il numero di telefono deve essere una stringa con il formato "xxx-xxx-xxxx", dove "x" rappresenta un cifra numerica.
Crea una funzione che accetta come parametro un oggetto del tipo di dato definito e restituisce true se il formato è corretto e false altrimenti.*/

interface Contatto{
    nome: string;
    telefono: string;
}

function verificaContatto(c: Contatto) :boolean
{
    let risultato: boolean = false;
    if(c && c.nome && c.telefono && c.telefono.length === 12)
    {
        
        const caratteri = c.telefono.split('');
        for(let i = 0; i < caratteri.length; i++)
        {
            // estraggo dalla stringa del telefono un carattere per volta
            const ch = caratteri[i];

            // controllo il tipo di carattere se è ok nella posizione corrente
            // 0123456789011
            // xxx-xxx-xxxx
            if(ch === '-' && (i === 3 || i === 7))
            {
                //tutto ok
                risultato = true;
            }
            else if ((
                ch === '0' ||
                ch === '1' ||
                ch === '2' ||
                ch === '3' ||
                ch === '4' ||
                ch === '5' ||
                ch === '6' ||
                ch === '7' ||
                ch === '8' ||
                ch === '9') && (
                (i !== 3 && i !== 7 ))) {
                // tutto ok
                risultato = true;
            } else {
                // errore!
                risultato = false;
                break;
            }
        }
    }

    return risultato;
}

let c1: Contatto = {nome: "Pippo", telefono: "1234567890"};
let c2: Contatto = {nome: "Mario", telefono: "123-456-7890"};
let c3: Contatto = {nome: "Luigi", telefono: "123-456-7890123"};

console.log(`${c1.nome}: ${c1.telefono}: ${verificaContatto(c1)}`);
console.log(`${c2.nome}: ${c2.telefono}: ${verificaContatto(c2)}`);
console.log(`${c3.nome}: ${c3.telefono}: ${verificaContatto(c3)}`);



//ALTERNATIVA CON RegExp
function verificaContattoConRegExp(c: Contatto): boolean {
    let result: boolean = false;
    if(c && c.nome && c.telefono)
    {
        //let pattern = new RegExp('[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]');
        let patternAlt = new RegExp('^(\d{3})-?(\d{3})-?(\d{4})$');  //da controllare perchè il return da sempre falso
        result = patternAlt.test(c.telefono);
    }
    return result;
}

let c4: Contatto = { nome: 'Daniele', telefono: '12312542362' };
let c5: Contatto = { nome: 'Marco', telefono: '123-456-7890' };
let c6: Contatto = { nome: 'Luca', telefono: '123-456-789' };
console.log("con RegExp: ");
console.log(`${c4.nome}: ${c4.telefono}: ${verificaContattoConRegExp(c4)}`);
console.log(`${c5.nome}: ${c5.telefono}: ${verificaContattoConRegExp(c5)}`);
console.log(`${c6.nome}: ${c6.telefono}: ${verificaContattoConRegExp(c6)}`);