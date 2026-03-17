/*- creare un file `esercizio-01.ts`
 - all'interno del file definire una funzione con nome `convertiInLettereNumeroX` che
   accetta come parametro un numero compreso tra 0 e 9 e ne restituisce la stringa che
   rappresenta il numero in lettere nella lingua italiana.*/

function convertiInLettereNumeroX(numero: number)
{
    const numeroAstringa = Math.abs(numero).toString();
    if(numeroAstringa.length >= 1)
    {
        const unitaTrovata = parseInt(numeroAstringa.charAt(0));
        switch (numero)
        {
            case 0: console.log("zero");
    
            case 1: console.log("uno");
            break;
    
            case 2: console.log("due");
            break;
    
            case 3: console.log("tre");
            break;
    
            case 4: console.log("quattro");
            break;
    
            case 5: console.log("cinque");
            break;
    
            case 6: console.log("sei");
            break;
    
            case 7: console.log("sette");
            break;
    
            case 8: console.log("otto");
            break;
    
            case 9: console.log("nove");
            break;
    
            default: console.log("Devi inserire un numero tra 0 e 9");
        }
    }
}

convertiInLettereNumeroX(6);