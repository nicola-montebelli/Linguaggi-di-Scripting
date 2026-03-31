type Stato = "aperto" | "chiuso" | "in-attesa";

export const getBadge = (stato: Stato): string => {
  switch (stato) {
    case "aperto":
      return "OK";
    case "chiuso":
      return "non disponibile"; //FIX: cambiato console.log con il return che ritorna direttamente la stringa
    case "in-attesa":
      return "attendi"; //FIX: modificato il return 0 con return "..." poichè la funzione si aspetta una stringa nel return
    default:
      return "ERRORE";
  }
};

export const salvaSimulato = (nome: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (nome.length > 0) {
      setTimeout(() => resolve("Salvato: " + nome), 200);
    }
    // FIX: il reject dovrebbe essere alternativo al resolve, mancava l'else
    else
    {
      reject("Nome mancante");
    }
  });
};
