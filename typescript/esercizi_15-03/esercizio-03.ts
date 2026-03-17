/* - creare un file `esercizio-03.ts`
 - all'interno del file definire una funzione con nome `convertiInLettereNumeroXXX` che
   accetta come parametro un numero compreso tra 0 e 999 e ne restituisce la stringa che
   rappresenta il numero in lettere nella lingua italiana.


Riutilizzare possibilmente le funzioni definite negli esercizi precedenti.
*/


function trovaCentinaia(numero: number){
    const numeroAbs = Math.abs(numero);
    const divisione = numeroAbs/10;
    const centinaiaTrovata = Math.floor(divisione);
    return centinaiaTrovata % 10;
}
//metodo matematico


function convertiInLettereNumeroXXX(numero: number)
{
    const numeroAstringa = Math.abs(numero).toString();

    if(numeroAstringa.length == 3)
    {
        const centinaiaTrovata = parseInt(numeroAstringa.charAt(0));
        { 
            switch(centinaiaTrovata)
            {
                case 1: console.log("cento");
                break;

                case 2: console.log("duecento");
                break;
        
                case 3: console.log("trecento");
                break;
        
                case 4: console.log("quattrocento");
                break;
        
                case 5: console.log("cinquecento");
                break;
        
                case 6: console.log("seicento");
                break;
        
                case 7: console.log("settecento");
                break;
        
                case 8: console.log("ottocento");
                break;
        
                case 9: console.log("novecento");
                break;
            }
        }
    }
}
convertiInLettereNumeroXXX(555);