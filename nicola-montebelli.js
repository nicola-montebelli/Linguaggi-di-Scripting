/*Creare il file `esercizio-01.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:
  - creare un array di stringhe che rappresentano una lista della spesa
  - stampare con `console.log()` gli elementi della lista uno per uno
  - rimuovere il primo elemento dalla lista
  - aggiungere in fondo un nuovo elemento alla lista
  - stampare con `console.log()` gli elementi della lista uno per uno*/

    const spesa = ["uova : 6 pz","latte : 2l","sedano : 500 g","pasta di mandorle : 2 pz","dentifricio : 3 pz"];
    const spesa2 = ["fagioli : 2 kg","acqua : 2l","fazzoletti : 4 pz"];
    console.log(spesa);
    spesa.shift();
    spesa.push("zucchero : 2 kg");
    console.log(spesa);


/*Creare il file `esercizio-02.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:
  - creare un array contenente almeno 10 numeri interi
  - Per ciascun elemento della lista, scrivere in console se il numero è pari o dispari.*/

  const numeri =[5,3,7,11,88,478,333,1221,65,0];
  for(let i = 0; i < numeri.length; i++)
  {
    if(numeri[i]%2==0)
    {
        if(numeri[i] == 0) console.log(numeri[i], " zero non è ne pari ne dispari");
        else console.log(numeri[i]," è pari");
    }
    else console.log(numeri[i], " è dispari");
  }


/*Creare il file `esercizio-03.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:

  - Dato un numero intero N (esempio N=20), calcolare la somma dei numeri interi da 1 a N*/

 let numero = 20;
 let sommaTot = 0;

  for(let i = 0; i <= numero; i++)
  {
    sommaTot = sommaTot + i;
  }


  /*Creare il file `esercizio-04.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:

  - Creare una funzione `saluta()` che accetta come parametro il nome di una persona e
    scrive in console un saluto seguito dal nome
  - Utilizzare la funzione per salutare alcuni nomi */

  function saluto(nome)
  {
        console.log("Ciao "+ nome+"!");
  }

  let nome = "Nicola";
  saluto(nome);


/* Creare il file `esercizio-05.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:

  - Creare un array di numeri interi che rappresentano i voti delle verifiche del corso,
    i possibili valori che ogni voto può assumere vanno da 0 a 100.
  - Creare una funzione che riceve come parametro l'array di numeri e ritorna come risultato
    la media di voti
  - Stampare in console l'elenco dei voti e la media.*/

  let voti=[];
  for(let i = 0; i<10; i++)
  {
        voti.push(Math.floor(Math.random() * 101));
  }

  function mediaVoti(array)
  {
    let media = 0;
    let somma = 0;
    for(let i = 0; i<array.length; i++)
    {
        somma += array[i];
    }
    media = somma/array.length;
    return console.log("Elenco dei voti: " + array + " La media è: " + media);
  }

  mediaVoti(voti);


/* Creare il file `esercizio-06.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:

- Creare un array di numeri interi
  - Creare una funzione che riceve come parametro l'array di numeri e ritorna come risultato
    il valore massimo presente nell'array
  - Creare una funzione che riceve come parametro l'array di numeri e ritorna come risultato
    il valore minimo presente nell'array
  - Stampare in console il valore minimo ed il valore massimo presente nell'array.*/

  let nums=[];
  for(let i = 0; i<10; i++)
  {
        voti.push(Math.floor(Math.random() * 101));
  }

  function massimo(array)
  {
    let max = 0;
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] > max)
        {
            max = array[i];
        }
    }
    return "Il valore maggiore è: "+ max;
  }

  massimo(nums);

  function minore(array)
  {
    let min = Infinity;
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] < min)
        {
            min = array[i];
        }
    }
    return "Il valore minore è: " + min;
  }

  minore(nums);


/* Creare il file `esercizio-07.js` dentro al quale scrivere il codice JavaScript che realizza i seguenti punti:

  - Creare una funzione che riceve come parametro una parola e ritorna come risultato
    il numero di vocali presenti nella parola
  - Stampare in console la parola ed il numero di vocali presenti nella parola.*/

  function contaParola(parola)
  {
    let conteggio = parola.match(/[aeiouàèéìòù]/gi);
    return conteggio ? parola + " : " + conteggio.length : 0;
  }

  contaParola("catarifrangente");