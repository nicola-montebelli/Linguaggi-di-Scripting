import { Component } from '@angular/core';
import { ICar, CarService } from '../car-service';

@Component({
  selector: 'app-car-list',
  standalone: false,
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarList {
  carList: ICar[] = [];
  message: string = '';

  constructor(private carService: CarService){
    //richiama il service per ottenere l'elenco
    this.carService.getCarList()
    .then(list => {
      this.carList = list;
    })
    .catch(err => {
      console.error("Errore", err);
      this.message = err;
    })
  }
}
