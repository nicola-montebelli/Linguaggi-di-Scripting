import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarList } from './car-list/car-list';
import { CarDetails } from './car-details/car-details';


const routes: Routes = [
  {path: '', component: CarList},
  {path: 'car', component: CarList},
  {path: 'car/:id', component: CarDetails},
  //altrimenti redireziona alla home
  {path: '**', redirectTo: ''}
];
//^ dichiariamo degli url simulati che ci portano ai componenti interessati

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
