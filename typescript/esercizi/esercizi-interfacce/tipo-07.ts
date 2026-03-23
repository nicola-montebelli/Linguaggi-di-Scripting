/*  Definisci un tipo di dato primitivo per rappresentare un'ora del giorno. 
L'input dovrebbe essere una stringa con il formato "hh:mm", dove "hh" rappresenta le ore e "mm" rappresenta i minuti. 
Crea una funzione che accetta un'ora del giorno come parametro 
e restituisce una stringa che indica se l'ora è del mattino, del pomeriggio o della sera.*/


let ora: string = "15:40";

function trovaOra(time: string): string{
    let oraGiorno: string = '';
    if(time.length === 5)
    {
        if(time.charAt(0) === '0' && (time.charAt(1) === '1' 
                                       || time.charAt(1) === '2' 
                                       || time.charAt(1) === '3' 
                                       || time.charAt(1) === '4'
                                       || time.charAt(1) === '5'
                                       || time.charAt(1) === '6'
                                       || time.charAt(1) === '7'
                                       || time.charAt(1) === '8'
                                       || time.charAt(1) === '9'
                                       || time.charAt(1) === '0'))  
        {
            oraGiorno = "Ora del mattino";
        }
        else if(time.charAt(0) === '1' && (time.charAt(1) === '0'
                                            || time.charAt(1) === '1'))
        {
            oraGiorno = "Ora del mattino";
        }
        else if(time.charAt(0) === '1' && (time.charAt(1) === '2'
                                            || time.charAt(1) === '3'
                                            || time.charAt(1) === '4'
                                            || time.charAt(1) === '5'
                                            || time.charAt(1) === '6'
                                            || time.charAt(1) === '7'
                                            || time.charAt(1) === '8'))
        {
            oraGiorno = "Ora del pomeriggio";
        }
        else if((time.charAt(0) === '1' && time.charAt(1) === '9') || (time.charAt(0) === '2' && time.charAt(1) === '0'
                                                                                                || time.charAt(1) === '1'
                                                                                                || time.charAt(1) === '2'
                                                                                                || time.charAt(1) === '3'))
        {
            oraGiorno = "Ora della sera";
        }
    }
    else
    {
        oraGiorno = "Inserisci un orario valido";
    }
      return oraGiorno;
}

console.log(trovaOra(ora));