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

