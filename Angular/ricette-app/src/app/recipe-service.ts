import { Injectable } from '@angular/core';
import { IRecipe, IRecipeBackend } from './recipe.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  private baseUrl: string = 'http://localhost:3000/ricette';

  constructor(private http: HttpClient){
  }
  /**
   * abbiamo la necessità di trasformare il modello dati frontend in backend e viceversa
   */

  /**
   * Converte un oggetto IRecipeBackend in un oggetto IRecipe
   * @param rb oggetto del backend
   * @returns oggetto usato nel frontend
   */
  private mapIRecipeBackendToIRecipe(rb: IRecipeBackend): IRecipe {
    const r: IRecipe = {
              id: (rb.id && rb.id.length > 0 ? rb.id : ''),
              name: rb.nome,
              category: rb.categoria,
              image: rb.immagine,
              description: rb.descrizione,
              difficulty: rb.difficolta,
              prepTime: rb.tempoPreparazione,
            };
    return r;
  }

  /**
   * Converte un oggetto IRecipe in un oggetto IRecipeBackend
   * @param r oggetto del frontend
   * @returns oggetto usato nel backend
   */
  private mapIRecipeToIRecipeBackend(r: IRecipe): IRecipeBackend {
    const rb: IRecipeBackend = {
              nome: r.name,
              categoria: r.category,
              descrizione: r.description,
              difficolta: r.difficulty,
              immagine: r.image,
              tempoPreparazione: r.prepTime,
            };
    if (r.id.length > 0) {
      rb.id = r.id;
    }
    return rb;
  }


/**
* Implementazioni dei metodi CRUD verso il backend
*/

  /**
   * GET http://localhost:3000/ricette
   * @returns Elenco ricette
   */
  getRecipeList$(): Observable<IRecipe[]>{
    //TODO
    return this.http.get<IRecipeBackend[]>(this.baseUrl).pipe(
      map(l => l.map(rb => this.mapIRecipeBackendToIRecipe(rb)))  //il primo map è l'operatore rxjs

      /**
       * il secondo map è la funzione angular per gli array
       * e ci evita questa porzione di codice:
       * map((lrb: IRicettaBackend[]) => {
        // return lrb.map(rb => this.mapIRicettaBackendToIRecipe(rb))
        const lr: IRecipe[] = [];
        for (let i = 0; i < lrb.length; i++) {
          const r: IRecipe = this.mapIRicettaBackendToIRecipe(lrb[i]);
          lr.push(r);
        }
        return lr;
      })
       */
    );
  }

  getRecipe$(id: string): Observable<IRecipe>{
    return this.http.get<IRecipeBackend>(`${this.baseUrl}/${id}`).pipe(
      map(rb => this.mapIRecipeBackendToIRecipe(rb))
    )
  }

  createRecipe$(recipe: IRecipe): Observable<IRecipe>{
    return this.http.post<IRecipeBackend>(`${this.baseUrl}`, this.mapIRecipeToIRecipeBackend(recipe)).pipe(
      map(rb => this.mapIRecipeBackendToIRecipe(rb))
    );
  }

  updateRecipe$(recipe: IRecipe): Observable<IRecipe> {
    return this.http.put<IRecipeBackend>(`${this.baseUrl}/${recipe.id}`, this.mapIRecipeToIRecipeBackend(recipe)).pipe(
      map(rb => this.mapIRecipeBackendToIRecipe(rb))
    );
  }

  deleteRecipe$(id: string): Observable<IRecipe> {
    return this.http.delete<IRecipeBackend>(`${this.baseUrl}/${id}`).pipe(
      map(rb => this.mapIRecipeBackendToIRecipe(rb))
    );
  }
}
