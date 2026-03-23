/* - creare un file `esercizio-04.ts`
- all'interno del file definire una funzione con nome `analizzaTesto` che
  accetta come parametro una stringa, e dopo aver analizzato i caratteri del testo, fornisce in
  risposta un oggetto che contiene i conteggi dei valori:

  - conteggio totale di tutti i caratteri
  - conteggio dei caratteri che sono vocali
  - conteggio dei caratteri che sono consonanti
  - conteggio dei caratteri che sono numeri numeri
  - conteggio di tutti gli altri caratteri (spazi, simboli, ...)

L'oggetto di risposta della funzione dovrà avere gli stessi campi della seguente interfaccia:

    interface RisultatoAnalisiTesto {
        testo: string;
        numeroTotale: number;
        numeroVocali: number;
        numeroConsonanti: number;
        numeroCifre: number;
        numeroAltri: number;
    }
```
PS: restringere la gestione del conteggio ai soli caratteri della tabella ASCII*/
interface RisultatoAnalisiTesto {
        testo: string,
        numeroTotale: number | undefined,
        numeroVocali: number | undefined,
        numeroConsonanti: number | undefined,
        numeroCifre: number | undefined,
        numeroAltri: number | undefined;
    };

    let frase: string = "Ecco una stringa da analizzare. Il risultato sarà un'oggetto di un'interfaccia che riporterà i conteggi dei vari caratteri e i numeri compresi tra 0-9";

    function analizzaStringa(stringa: string): RisultatoAnalisiTesto
    {
        let conteggioVocali: number | undefined = 0;
        let conteggioConsonanti: number | undefined = 0;
        let conteggioCifre: number | undefined = 0;
        let conteggioAltri: number | undefined = 0;
        let conteggioTotale: number | undefined = 0;

        conteggioVocali = stringa.match(/[aeiouàèìòùA'E'I'O'U']/g)?.length;
        conteggioConsonanti = stringa.match(/[b-df-hj-np-tv-z]/g)?.length;
        conteggioCifre = stringa.match(/\d/g)?.length;
        conteggioAltri = stringa.match(/[!"€£$%&/()=?'^+\]*\[§°#ç@,;.:_-]/g)?.length;
        conteggioTotale = stringa.match(/./g)?.length;

        return {
            testo: stringa,
            numeroTotale: conteggioTotale,
            numeroVocali: conteggioVocali,
            numeroConsonanti: conteggioConsonanti,
            numeroCifre: conteggioCifre,
            numeroAltri: conteggioAltri
        };
    }

console.log(analizzaStringa(frase));