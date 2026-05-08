import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { RecipeEdit } from './recipe-edit/recipe-edit';

const routes: Routes = [
  {path: '', component: RecipeList},
  {path: 'recipe/new', component: RecipeEdit},
  {path: 'recipe/:id', component: RecipeDetail},
  {path: 'recipe/:id/edit', component: RecipeEdit},

  //redirects to home
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
