import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom,  } from 'rxjs';


export interface IPoke {
  id: number,
  name: string,
  height: number,
  weight: number,
  moves: IMoves,
  type: undefined,
}

export interface IMoves {
  id: number,
  name: string,
  accuracy: number,
  power: number,
  pp: number,
  type: string
}
@Injectable({
  providedIn: 'root',
})
export class PokeService {

  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient){}

  getPokeList(): Promise<IPoke[]> {
    return firstValueFrom(this.http.get<IPoke[]>(this.pokeUrl));
  }
}




/**
 * 
 * getMove(url: string) {
  return this.http.get<MoveDetail>(url);
  }

  export interface MoveDetail {
  id: number;
  name: string;
  power: number;
  accuracy: number;
  pp: number;
  type: NamedResource;
}
 */