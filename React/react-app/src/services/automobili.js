export async function get(){
    let listaAutomobili = await fetch("https://my-json-server.typicode.com/andreagaspari/zav-react-25/automobili"); { /* PROMISE*/}
    return await listaAutomobili.json();  { /*THEN*/}
                                    { /*TRY CATCH*/}
}