import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, firstValueFrom, mergeMap, Observable, toArray, tap, map } from 'rxjs';
import { ICar, ICarBackend } from './car-model';


@Injectable({
  providedIn: 'root',
})
export class CarService {
//private baseUrl = 'https://my-json-server.typicode.com/andreagaspari/zav-react-25/automobili';
private baseUrl  = 'http://localhost:3000/automobili'; //utilizziamo l'url del db che abbiamo spostato in locale 

constructor(private http: HttpClient){

}

/**
   * Converte un oggetto ICarBackend in un oggetto ICar
   * @param cb oggetto del backend
   * @returns oggetto usato nel frontend
   */
  private mapICarBackendToICar(cb: ICarBackend): ICar {
    const c: ICar = {
              id: (cb.id && cb.id.length > 0 ? cb.id : ''),
              marca: cb.marca,
              modello: cb.modello,
              immagine: cb.immagine,
              primaImmatricolazione: String(cb.anno),
              targa: cb.targa,
              colore: cb.colore,
              disponibile: cb.disponibile,
              km: String(cb.km)
            };
    return c;
  }

  /**
   * Converte un oggetto ICar in un oggetto ICarBackend (inverso di mapICarBackendToICar)
   * @param c oggetto del frontend
   * @returns oggetto usato nel backend
   */
  private mapICarToICarBackend(c: ICar): ICarBackend {
    const cb: ICarBackend = {
              marca: c.marca,
              modello: c.modello,
              immagine: c.immagine,
              anno: Number(c.primaImmatricolazione),
              targa: c.targa,
              colore: c.colore,
              disponibile: c.disponibile,
              km: Number(c.km)
            };
    if(c.id.length > 0){
      cb.id = c.id;
    }
    return cb;
  }


getCarList(): Promise<ICar[]> {
    return firstValueFrom(
      this.http.get<ICarBackend[]>(this.baseUrl).pipe(
        map(cbList => {
          const cList: ICar[] = [];
          for (let i = 0; i < cbList.length; i++) {
            cList.push( this.mapICarBackendToICar(cbList[i]) );
          }
          return cList;
        })
      )
    );
  } 



 getCar(id: string): Promise<ICar> {
    return firstValueFrom(
      this.http.get<ICarBackend>(`${this.baseUrl}/${id}`).pipe(
        map(cb => this.mapICarBackendToICar(cb))
      )
    );
  }
//^ chiamata http get al database per recuperare il singolo dato
//unendo all'url /id dove id coincide con l'id dell'auto


/**
 * Implementazione tramite Observable
 */
getCarList$(searchText?: string): Observable<ICar[]> {
   if (searchText && searchText.length > 0) {
      return this.http.get<ICarBackend[]>(this.baseUrl).pipe(
          // tap(a => console.log('tap1', a)),
        mergeMap(list => list),                     // list: ICarBackend[]
        map(cb => this.mapICarBackendToICar(cb)),   // cb: ICarBackend
          // tap(a => console.log('tap2', a)),
        filter(car => {                             // car: ICar
          const s = searchText.trim().toLowerCase();
          const ss = searchText.split(' ');

          return ss.every(p => {
            return car.marca.toLowerCase().includes(p) ||
                 car.modello.toLowerCase().includes(p) ||
                 car.colore.toLowerCase().includes(p) ||
                 (car.targa != null && car.targa.toLowerCase().includes(p));
          });
        }),
        toArray(),
          // tap(a => console.log('tap3', a)),
      );
    } else {
      return this.http.get<ICarBackend[]>(this.baseUrl).pipe(
        map(list => list.map(cb => this.mapICarBackendToICar(cb))),
      );
    }
  }   

getCar$(id: string): Observable<ICar>{
    return this.http.get<ICarBackend>(`${this.baseUrl}/${id}`).pipe(
      map(cb => this.mapICarBackendToICar(cb)),   // cb: ICarBackend
    );
  }


  updateCar$(car: ICar): Observable<ICar> {
    return this.http.put<ICarBackend>(`${this.baseUrl}/${car.id}`, this.mapICarToICarBackend(car))
      .pipe(
        map(cb => this.mapICarBackendToICar(cb)),   // cb: ICarBackend
      );
  }

  deleteCar$(carId: string): Observable<ICar> {
    return this.http.delete<any>(`${this.baseUrl}/${carId}`)
      .pipe(
        map(cb => this.mapICarBackendToICar(cb)),
      );
  }


  /**
   * Crea una nuova auto sul backend
   * @param carId identificativo dell'auto
   */
  createCar$(car: ICar): Observable<ICar> {
    return this.http.post<any>(`${this.baseUrl}`, this.mapICarToICarBackend(car))
      .pipe(
        map(cb => this.mapICarBackendToICar(cb)),
      );
  }


}


