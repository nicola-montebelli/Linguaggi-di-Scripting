import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../recipe.model';
import { RecipeService } from '../recipe-service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList implements OnInit {
  recipeList: IRecipe[] = [];
  errorMessage: string | null = null;

  constructor(private recipeService: RecipeService){
  }

  ngOnInit(): void {
    this.recipeService.getRecipeList$().subscribe({
      next: (list) => {
        this.recipeList = list;
        this.errorMessage = null;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });     //subscribe è come la then ma funziona con le observable
  }
}
