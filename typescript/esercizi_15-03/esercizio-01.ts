/*- creare un file `esercizio-01.ts`
 - all'interno del file definire una funzione con nome `convertiInLettereNumeroX` che
   accetta come parametro un numero compreso tra 0 e 9 e ne restituisce la stringa che
   rappresenta il numero in lettere nella lingua italiana.*/

// function convertiInLettereNumeroX(numero: number)
// {
//     switch (numero)
//         {
//             case 0: console.log("zero");
    
//             case 1: console.log("uno");
//             break;
    
//             case 2: console.log("due");
//             break;
    
//             case 3: console.log("tre");
//             break;
    
//             case 4: console.log("quattro");
//             break;
    
//             case 5: console.log("cinque");
//             break;
    
//             case 6: console.log("sei");
//             break;
    
//             case 7: console.log("sette");
//             break;
    
//             case 8: console.log("otto");
//             break;
    
//             case 9: console.log("nove");
//             break;
    
//             default: console.log("Devi inserire un numero tra 0 e 9");
//             break;
//         }
// }
// convertiInLettereNumeroX(6);

//########################
//ESERCIZIO FATTO COL PROF

export function convertiInLettereNX_switch(n: number): string{     //quando la funzione ha un tipo di ritorno (:string) il corpo della funzione deve avere un return
    let risultato: string = '';
    let avvertimento: string = '';

    //TODO: aggiungere controllo che:
    //      -n sia tra 0 e 9
    //      - sia effettivamente un numero intero
    if(n < 0 || n > 9)
    {
        return "Devi inserire un numero tra 0 e 9";
    }
    switch(n)
    {
        case 0: risultato = 'zero';
        break;

        case 1: risultato = 'uno';
        break;

        case 2: risultato = 'due';
        break;

        case 3: risultato = 'tre';
        break;

        case 4: risultato = 'quattro';
        break;

        case 5: risultato = 'cinque';
        break;

        case 6: risultato = 'sei';
        break;

        case 7: risultato = 'sette';
        break;

        case 8: risultato = 'otto';
        break;

        case 9: risultato = 'nove';
        break;
        
        default: avvertimento = 'Devi inserire un numero tra 0 e 9';
    }
    return risultato;
}
console.log(convertiInLettereNX_switch(9));

for (let i = 0; i < 10; i++) {
    const n: number = Math.floor(Math.random() * 10);     //for per creare 9 numeri random compresi tra 0 e 9
    console.log( n + ' => ' + convertiInLettereNX_switch(n) );
}

//###########################
//ALTERNATIVA FATTA IN CLASSE

export function convertiInLettereNX_array(n: number): string
{
    let result: string = '';
    //TODO: aggiungere controllo che:
    //      -n sia tra 0 e 9
    //      - sia effettivamente un numero intero

    let unità: string[] = ['zero', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove'];

    if(Number.isInteger(n) && n >= 0 && n <= 9 && unità[n])     //controlliamo che unità[] abbia un valore in modo che posso essere assegnata alla variabile result (altrimenti darà errore: impossibile assegnare undefined a string)
    {
        result = unità[n];
    } else{
        result = 'Devi inserire un numero tra 0 e 9';
    }
    return result;
}

console.log('Array:' + convertiInLettereNX_array(5));