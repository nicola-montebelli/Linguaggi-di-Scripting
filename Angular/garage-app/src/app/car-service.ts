import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, firstValueFrom, mergeMap, Observable, toArray } from 'rxjs';
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


getCarList(): Promise<ICar[]> {
    return firstValueFrom(this.http.get<ICar[]>(this.baseUrl));
  }   
//^ chiamata http tipo get all'url del database per recuperare la lista di auto


 getCar(id: number): Promise<ICar>{
    return firstValueFrom(this.http.get<ICar>(this.baseUrl + '/' + id));
  }
//^ chiamata http get al database per recuperare il singolo dato
//unendo all'url /id dove id coincide con l'id dell'auto

/**
 * Implementazione tramite Observable
 */
getCarList$(searchText?: string): Observable<ICar[]> {
  if(searchText && searchText.length > 0){
    //qui deve filtrare
    return this.http.get<ICar[]>(this.baseUrl).pipe(
        mergeMap(list => list),
        filter(car => {
          const s = searchText.trim().toLowerCase();
          const ss = searchText.split(' ');
          return ss.every(p => {        //questo ci permette di fare una search del tipo: bmw grigia
              return car.marca.toLowerCase().includes(p) ||
                    car.modello.toLowerCase().includes(p) ||
                    car.colore.toLowerCase().includes(p) ||
                    (car.targa != null && car.targa.toLowerCase().includes(p))
          });
          
  }),
        toArray()
      );
  } else{
    return this.http.get<ICar[]>(this.baseUrl);
  }
  }   

getCar$(id: number): Observable<ICar>{
    return this.http.get<ICar>(this.baseUrl + '/' + id);
  }



}


