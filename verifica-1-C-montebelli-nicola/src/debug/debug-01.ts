export function totalSeats(values: number[]): number {
  let total: number = 0;  //FIX: aggiunto il type number alla variabile total

  for (let i = 0; i < values.length; i++) { //FIX: cambiata la condizione da i <= values.lenght a i < values.lenght
    total = total + values[i];
  }

  return total;  //FIX: tolta la funzione toString in quanto la funzione totalSeats si aspetta un number nel return
}

export function makeLabel(title: string): string {
  const label: string = "corso: " + title;  //FIX: aggiunto il type string alla const label
  label.toUpperCase();
  return label;
}
