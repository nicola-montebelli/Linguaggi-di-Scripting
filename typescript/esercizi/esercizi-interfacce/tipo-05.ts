/* Definisci un tipo di dato per rappresentare un punteggio. Il punteggio dovrebbe essere un numero compreso tra 0 e 100.
Crea una funzione che accetta un punteggio come parametro e restituisce una stringa che indica se il punteggio è
insufficiente (25), sufficiente (50), buono (75) o eccellente (100).*/

let punteggio: number = Math.floor(Math.random() * 101);
//console.log(punteggio);

function votazione(score: number): string{
    let votoStringa: string = '';
    if(score <= 33)
    {
        votoStringa = "Insufficiente";
    }
    else if(score > 33 && score <= 66)
    {
        votoStringa = "Sufficiente";
    }
    else if(score > 66 && score <= 99)
    {
        votoStringa = "Buono";
    }
    else if(score === 100)
    {
        votoStringa = "Eccellente";
    }
    return votoStringa;
}
console.log(punteggio + ': ' + votazione(punteggio));