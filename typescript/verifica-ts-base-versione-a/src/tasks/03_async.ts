export function simulaSalvataggio(nomeFile: string, valido: boolean = true): Promise<string> {
  return new Promise((resolve, reject) => {
    // Usa setTimeout di 300 ms
    // Se valido è true -> resolve(`Salvato: ${nomeFile}`)
    // Se valido è false -> reject("File non valido")
    const simulaSalvataggio = () =>{
      if(valido)
      {
        resolve(`Salvato: ${nomeFile}`);
      }
      else
      {
        reject("File non valido");
      }
    }
    setTimeout(simulaSalvataggio, 300);
  });
}

let salvataggio: Promise<string> = simulaSalvataggio('file1.doc');
salvataggio.then(save => {
  console.log("Salvataggio riuscito");
  return save;
})
.catch(err => console.error("Salvataggio fallito " + err));