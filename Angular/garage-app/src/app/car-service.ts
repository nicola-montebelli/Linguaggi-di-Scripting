import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Car } from './car/car';

export interface ICar {
    id: number,
    marca: string,
    modello: string,
    immagine: string,
    anno: number,
    targa?: string,
    colore: string,
    disponibile: boolean,
    km: number
}

@Injectable({
  providedIn: 'root',
})
export class CarService {
private garage: ICar[] = [];
private baseUrl = 'https://my-json-server.typicode.com/andreagaspari/zav-react-25/automobili';

constructor(private http: HttpClient){

}
// getCarList(): Promise<ICar[]> {
//   return Promise.resolve(this.garage)
// }
//^ è l'equivalente di:
/**
 * return new Promise((resolve, reject) => {
      // effettura chiamate http per recuperare i dati
      // ...
      resolve(this.garage);
    });
 */

getCarList(): Promise<ICar[]> {
    return firstValueFrom(this.http.get<ICar[]>(this.baseUrl));
  }   
//^ chiamata http tipo get all'url del database per recuperare la lista di auto


 getCar(id: number): Promise<ICar>{
    return firstValueFrom(this.http.get<ICar>(this.baseUrl + '/' + id));
  }
//^ chiamata http get al database per recuperare il singolo dato
//unendo all'url /id dove id coincide con l'id dell'auto




  // getCar(id: number): Promise<ICar>{
  //   return new Promise((resolve, reject) => {
  //     const car: ICar | undefined = this.garage.find(c => c.id === id);
  //       if (car) {
  //         resolve(car);
  //       } else {
  //         reject('Car Not Found');
  //       }
  //   });
  // }
}
