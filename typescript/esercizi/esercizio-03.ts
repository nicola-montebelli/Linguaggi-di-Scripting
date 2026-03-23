/* - creare un file `esercizio-03.ts`
 - all'interno del file definire una funzione con nome `convertiInLettereNumeroXXX` che
   accetta come parametro un numero compreso tra 0 e 999 e ne restituisce la stringa che
   rappresenta il numero in lettere nella lingua italiana.
Riutilizzare possibilmente le funzioni definite negli esercizi precedenti.
*/

import { convertiInLettereNumeroXX } from "./esercizio-02";
import { convertiInLettereNX_array } from "./esercizio-01";

export function convertiInLettereNumeroXXX(n: number): string
{
    let risultato: string = ''
    const centinaia: string[] = ['','cento','duecento','trecento','quattrocento','cinquecento','seicento','settecento','ottocento','novecento'];

    if(Number.isInteger(n) && n >=0 && n <= 999)
    {
        let centinaiaTrovata = Math.floor(n / 100);

        let unitaEdecineTrovate = n % 100;

        let StringaCentinaia = '';
        let StringaUnitaDecine = '';

        if(centinaiaTrovata === 0)
        {
            StringaCentinaia = '';
            StringaUnitaDecine = convertiInLettereNumeroXX(unitaEdecineTrovate);
        }
        else if(unitaEdecineTrovate === 0)
        {
            StringaCentinaia = centinaia[centinaiaTrovata] || '';
            StringaUnitaDecine = '';
        }
        else
        {
            StringaCentinaia = centinaia[centinaiaTrovata] || '';
            StringaUnitaDecine = convertiInLettereNumeroXX(unitaEdecineTrovate);
        }
        risultato = StringaCentinaia + StringaUnitaDecine;
    }

    return risultato;
}


function generaRandomInt(max: number): number {
    return Math.floor( Math.random() * max );
}

for (let i = 0; i < 50; i++) {
    const n: number = generaRandomInt(1000);
    console.log( n + ' => ' + convertiInLettereNumeroXXX(n) );
}