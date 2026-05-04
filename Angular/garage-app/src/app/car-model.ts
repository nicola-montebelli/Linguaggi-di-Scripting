// Modella l'interfaccia ICar per il dato in
// https://my-json-server.typicode.com/andreagaspari/zav-react-25/automobili
export interface ICar {
  id: string;
  marca: string;
  modello: string;
  immagine: string;
  primaImmatricolazione: string;
  targa?: string;
  colore: string;
  disponibile: boolean;
  km: string;
}

export interface ICarBackend {
  id?: string;
  marca: string;
  modello: string;
  immagine: string;
  anno: number;
  targa?: string;
  colore: string;
  disponibile: boolean;
  km: number;
}
