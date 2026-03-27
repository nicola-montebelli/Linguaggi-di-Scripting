 import { eseguiLogin, getUserDocuments, User } from "./promise-2-server";

// esempio di esecuzione seriale di 2 promise:
// - eseguiLogin()
// - getUserDocuments()
//

// Per un dettaglio della spiegazione leggere la seguente chat di ChatGPT:

// https://chatgpt.com/share/69c3d47a-97c4-832a-aeb9-df664a9c3c53

 let login: Promise<User> = eseguiLogin('Nick', '1234');
 login
 .then(usr => {
    console.log("(1) Login effettuato correttamente con utente " + usr.firstName + " " + usr.lastName);
    return usr;
 })
 .then(usr => {
    return getUserDocuments(usr.id);
 })
 .then(list => {
    console.log("(1) Elenco dei documenti per Nick: ");
    for (let i = 0; i < list.length; i++)
    {
            //pullare lo stesso esercizio dal prof
    }
 })
 .catch(err => console.error("(1) Login fallito: " + err));


let login2: Promise<User> = eseguiLogin('userEsterno', '12345');
login2.then(usr => {
    console.log("(2) Login effettuato correttamente con utente " + usr.firstName + " " + usr.lastName);
})
.catch(err => console.error("(2) Login fallito: " + err));