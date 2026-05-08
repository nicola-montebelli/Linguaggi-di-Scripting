import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { RecipeList } from './recipe-list/recipe-list';
import { Recipe } from './recipe/recipe';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { RecipeEdit } from './recipe-edit/recipe-edit';

@NgModule({
  declarations: [App, RecipeList, Recipe, RecipeDetail, RecipeEdit],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpClientModule, --> deprecato, l'alternativa è metterlo nei providers
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
  ],
  bootstrap: [App],
})
export class AppModule {}
