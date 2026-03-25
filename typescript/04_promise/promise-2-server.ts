
//Definizione delle interfacce
export interface User{
    id: number,
    user: string,
    pass: string
    firstName: string,
    lastName: string,
}

export interface Document{
    id: number,
    userId: number,
    fileName: string,
}

//elenco degli utenti
const userList: User[] = [
    {id: 1, user: 'Nick', pass: '1234', firstName: 'Nicola', lastName: 'Montebelli'},
    {id: 2, user: 'DarkGinoPaoli', pass: 'ggpaoli', firstName: 'Gino', lastName: 'Paoli'},
    {id: 3, user: 'User44', pass: '44gatti', firstName: 'Us', lastName: 'Er'}
];

//elenco di documenti
const docList: Document[] = [
    {id: 1, userId: 1, fileName: 'nick/doc1.txt'},
    {id: 2, userId: 1, fileName: 'nick/doc2.txt'},
    {id: 3, userId: 1, fileName: 'nick/doc3.txt'},
    {id: 4, userId: 2, fileName: 'gpaoli/doc1.txt'},
    {id: 5, userId: 2, fileName: 'gpaoli/doc2.txt'},
    {id: 6, userId: 3, fileName: 'user/doc1.txt'},
    {id: 7, userId: 3, fileName: 'user/doc2.txt'},
]


/**
 * Chiamata che simula il login effettuato sul server
 * @param user 
 * @param password 
 */
export function eseguiLogin(username: string, password: string): Promise<User>
{
    return new Promise((resolve, reject) => {
        const loginTask = () =>{
            //cerco all'interno dell'elenco l'indice dell'elemento che ha il campo user = a quello fornito come parametro
            const index = userList.findIndex(u => u.user === username && u.pass === password)
            if(index >= 0)
            {
                const user = userList[index];
                resolve(user);
            }
            else{
                reject("ERRORE: Login fallito");
            }
        }
        setTimeout(loginTask,Math.random() * 2 * 1000)
    });
}


export function getUserDocuments(user_ID: number): Promise<User>
{
    return new Promise((resolve, reject) => {
        const getUserDocuments = () =>{
            //cerco all'interno dell'elenco l'indice dell'elemento che ha il campo user = a quello fornito come parametro
            const documentList = docList.filter(d => d.userId === user_ID)
            if(documentList)
            {
                resolve(documentList != null);
            }
            else{
                reject("ERRORE: recupero dei documenti fallito");
            }
        }
        setTimeout(getUserDocuments,Math.random() * 2 * 1000)
    });
}