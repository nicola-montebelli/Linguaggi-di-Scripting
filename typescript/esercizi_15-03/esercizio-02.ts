/* - creare un file `esercizio-02.ts`
 - all'interno del file definire una funzione con nome `convertiInLettereNumeroXX` che
   accetta come parametro un numero compreso tra 0 e 99 e ne restituisce la stringa che
   rappresenta il numero in lettere nella lingua italiana.

Riutilizzare possibilmente le funzioni definite negli esercizi precedenti.*/

function convertiInLettereNumeroXX(numero: number)
{
    const numeroAstringa = Math.abs(numero).toString();

    if(numeroAstringa.length >= 2)
    {
        const decinaTrovata = parseInt(numeroAstringa.charAt(0));
        if(decinaTrovata == 1)
        {
            const unità = parseInt(numeroAstringa.charAt(1));
            switch(unità)
            {
                case 1: return "undici";
                break;

                case 2: console.log("dodici");
                break;

                case 3: console.log("tredici");
                break;

                case 4: console.log("quattordici");
                break;

                case 5: console.log("quindici");
                break;

                case 6: console.log("sedici");
                break;

                case 7: console.log("diciassette");
                break;

                case 8: console.log("diciotto");
                break;

                case 9: console.log("diciannove");
                break;
            }
        }
        else
        { 
            switch(decinaTrovata)
            {
                case 2: console.log("venti");
                break;
        
                case 3: console.log("trenta");
                break;
        
                case 4: console.log("quaranta");
                break;
        
                case 5: console.log("cinquanta");
                break;
        
                case 6: console.log("sessanta");
                break;
        
                case 7: console.log("settanta");
                break;
        
                case 8: console.log("ottanta");
                break;
        
                case 9: console.log("novanta");
                break;
            }
        }
    }
}

for(let i=11; i<20; i++)
{
convertiInLettereNumeroX(i);       //for per controllare se le decine specifiche vengono stampate
}


//difficoltà nell' usare una funzione dentro l'altra chiedere al prof se si può fare in classe
//convertiInLettereNumeroXX( () => {convertiInLettereNumeroX(47);}, 47);
