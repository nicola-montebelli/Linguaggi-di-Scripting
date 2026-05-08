import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecipe } from '../recipe.model';
import { RecipeService } from '../recipe-service';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail implements OnInit {
  recipeId: string | null = null;
  recipe: IRecipe | null = null;
  errorMessage: string | null = null;


  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService){
  }
  ngOnInit(): void {
    //determina l'id della ricetta
    this.recipeId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('RecipeDetail.ngOnInit(): recipe id=', this.recipeId);

    //se è passato un id, recupero la ricetta
    this.loadRecipe(this.recipeId);
  }

  private loadRecipe(id: string | null): void{
    if(id)
    {
      this.recipeService.getRecipe$(id).subscribe({
        next: (r) => {
          this.recipe = r;
          this.errorMessage = null;
        },
        error: (err) => {
          this.errorMessage = err;
        }
      });
    } else{
      this.errorMessage = 'ID non specificato';
    }
  }

}
