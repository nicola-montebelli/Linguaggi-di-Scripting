/**
 * modello dati locale, usato all'interno dell'applicazione
 */
export interface IRecipe{
    id: string;
    name: string;
    image: string;
    description: string;
    category: string[];
    difficulty: number; //da 1 a 5
    prepTime: string;
}

/**
 * Interfaccia per le comunicazioni con il backend
 */
export interface IRecipeBackend{
    id?: string;
    nome: string;
    immagine: string;
    descrizione: string;
    categoria: string[];
    difficolta: number; //da 1 a 5
    tempoPreparazione: string;
}