 import { eseguiLogin, getUserDocuments, User } from "./promise-2-server";

 let login: Promise<User> = eseguiLogin('Nick', '1234');
 login.then(usr => {
    console.log("(1) Login effettuato correttamente con utente " + usr.firstName + " " + usr.lastName);
    return usr;
 })
 .then(usr => {
    return getUserDocuments(usr.id);
 })
 .then(list => {
    console.log("Elenco dei documenti per Nick: ");
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