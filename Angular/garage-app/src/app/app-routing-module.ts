import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarList } from './car-list/car-list';
import { CarDetails } from './car-details/car-details';
import { CarEdit } from './car-edit/car-edit';


const routes: Routes = [
  {path: '', component: CarList},
  {path: 'car', component: CarList},
  {path: 'car/:id', component: CarDetails},
  {path: 'car/:id/edit', component: CarEdit},
 //altrimenti redireziona alla home
  {path: '**', redirectTo: ''},
];
//^ dichiariamo degli url simulati che ci portano ai componenti interessati

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
