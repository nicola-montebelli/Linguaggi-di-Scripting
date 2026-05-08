import { Injectable } from '@angular/core';
import { IRecipe, IRecipeBackend } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

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
}
