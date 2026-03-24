export async function get(filtri){ {/*stesso default di useEffect ('') */}
    let urlAuto = "https://my-json-server.typicode.com/andreagaspari/zav-react-25/automobili"
    let cleanedParams = Object.fromEntries(Object.entries(filtri).filter(([key, value]) => value != null && value != ''));
    {/* Object.entries ritorna un array con elementi chiave => valore (marca => xx colore => xx)
        Questo array lo filtriamo con .filter che funziona così:
        se l'oggetto esiste lo prendo altrimento lo butto via (value != null && value != '')
        nella .filter => possiamo mettere tutti i controlli che vogliamo
        Object.fromEntries riconverte l'array in oggetto*/}
    let searchParams = new URLSearchParams(cleanedParams).toString();
    urlAuto += '?' + searchParams;
    let listaAutomobili = await fetch(urlAuto);
    if(!listaAutomobili.ok)
    {
        throw new Error("Errore del server");
    }
    return await listaAutomobili.json();
}