/* - creare un file `esercizio-02.ts`
 - all'interno del file definire una funzione con nome `convertiInLettereNumeroXX` che
   accetta come parametro un numero compreso tra 0 e 99 e ne restituisce la stringa che
   rappresenta il numero in lettere nella lingua italiana.

Riutilizzare possibilmente le funzioni definite negli esercizi precedenti.*/

import { convertiInLettereNX_array  } from "./esercizio-01";        //importare la funzione dalla cartella o file in cui è presente
export function convertiInLettereNumeroXX(n: number): string
{
    let risultato: string = '';
    const decine: string[] =['', 'dieci', 'venti', 'trenta', 'quaranta', 'cinquanta', 'sessanta', 'settanta', 'ottanta', 'nove'];
    const decineSpeciali: string[] = ['','','','','','','','','','','','undici','dodici','tredici','quattordici','quindici','sedici','diciassette','diciotto','diciannove']

    if(Number.isInteger(n) && n >= 0 && n <= 99)
    {
        // Per ottenere le decine, dividiamo per 10 e arrotondiamo per difetto
        let decinaTrovata = Math.floor(n / 10);
        // Per ottenere le unità, usiamo il resto della divisione per 10
        let unitaTrovata = n % 10;

        let StringaDecina = '';
        let StringaUnita = '';

        if(n >= 11 && n <= 19)
        {
            StringaDecina = decineSpeciali[n] || '';
            StringaUnita = '';
        }

       else if(decinaTrovata === 0)
        {
            StringaDecina = '';
            StringaUnita = convertiInLettereNX_array(unitaTrovata);
        }
        else if(unitaTrovata === 0 && decine[decinaTrovata])
        {
            StringaDecina = decine[decinaTrovata];
            StringaUnita = '';
        }
        else
        {
            StringaDecina = decine[decinaTrovata] || '';
            StringaUnita = convertiInLettereNX_array(unitaTrovata);

            if(iniziaConVocale(StringaUnita))
            {
                StringaDecina = StringaDecina.slice(0,-1);
            }
        }
        risultato = StringaDecina + StringaUnita;
    }else {
        return "Devi inserire un numero tra 0 e 99";
    }
    return risultato;
}

function generaRandom(max: number): number
{
    return Math.floor(Math.random()* max);      //funzione che genera numeri random
}

for (let i = 0; i < 10; i++) {
    const n: number = generaRandom(30);
    console.log(convertiInLettereNumeroXX(n));
}


function iniziaConVocale(str: string ): boolean 
{
  if (!str) return false; // Gestisce stringhe vuote
  const vocali = ['a', 'e', 'i', 'o', 'u'];
  const primoCarattere = str.trim().charAt(0).toLowerCase();
  return vocali.includes(primoCarattere);
}