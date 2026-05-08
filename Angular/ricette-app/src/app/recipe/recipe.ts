import { Component, Input } from '@angular/core';
import { IRecipe } from '../recipe.model';

@Component({
  selector: 'app-recipe',
  standalone: false,
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe {

  @Input() recipe: IRecipe | null = null; //con @Input la variabile recipe diventa un attributo usato in recipe-list.html
}
