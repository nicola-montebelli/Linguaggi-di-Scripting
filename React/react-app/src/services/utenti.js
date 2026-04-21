export async function get(filtri){ {/*stesso default di useEffect ('') */}
    let urlUtenti = "https://my-json-server.typicode.com/andreagaspari/zav-react-25/utenti"
    let cleanedParams = Object.fromEntries(Object.entries(filtri).filter(([key, value]) => value != null && value != ''));
    /* 
    Converti Oggetto in Array di coppie (chiave, valore), 
    filtralo per value non nullo o vuoto,
    riconverti l'array in oggetto
    */
    let searchParams = new URLSearchParams(cleanedParams).toString();
    urlUtenti += '?' + searchParams;
    let listaUtenti = await fetch(urlUtenti);
    if(!listaUtenti.ok)
    {
        throw new Error("Errore del server");
    }
    return await listaUtenti.json();
}