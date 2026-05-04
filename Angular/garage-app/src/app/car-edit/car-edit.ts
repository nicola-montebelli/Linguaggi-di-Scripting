import { Component } from '@angular/core';
import { ICar } from '../car-model';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car-service';

@Component({
  selector: 'app-car-edit',
  standalone: false,
  templateUrl: './car-edit.html',
  styleUrl: './car-edit.css',
})
export class CarEdit {

  message: string | null = null;
  messageError: string | null = null;
  carId: string | null = null;
  car: ICar | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService
  ) {

  }

  ngOnInit(): void {
    // determina l'id dell'automobile da modificare'
    this.carId = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.carId){
      console.log('CarEdit.ngOnInit(): car id=', this.carId);
      // Se è stato passato un id, recupera l'automobile'
      this.loadCar(this.carId);
    }
    else {
      this.car = {
        id: '',
        marca: '',
        modello: '',
        immagine: '',
        primaImmatricolazione: '',
        km: '',
        colore: '',
        targa: '',
        disponibile: true,
      }
    }
  }

  /**
   * Carica l'automobile da modificare
   * @param carId
   */
  loadCar(carId: string | null) {
    // Se è stato passato un id, recupera l'automobile'
    if (this.carId != null) {
      this.carService.getCar$(String(this.carId)).subscribe({
        next: c => {
          this.car = c;
          console.log('CarEdit.ngOnInit(): car ', this.car);
          this.message = null;
          this.messageError = null;
        },
        error: err => {
          console.error('CarEdit.ngOnInit(): error getting car id=', this.carId, ' err=', err);
          this.messageError = err;
        }
      });
    }
  }



  onSave() {
    if (this.car != null) {
      if(this.car.id.length > 0)
      {
        this.carService.updateCar$(this.car).subscribe(
          c => {
            this.car = c;
            this.message = 'Car updated';
            this.messageError = null;
          },
          err => {
            console.error('CarEdit.onSave(): error updating car id=', this.carId, ' err=', err);
            this.messageError = err;
          }
        );
      }
      else{
        this.carService.createCar$(this.car).subscribe(
          c => {
            this.car = c;
            this.message = "Car Created";
            this.messageError = null;
          },
          err => {
            console.error('CarEdit.onSave(): error creating car: ', this.car, ' err=', err);
            this.messageError = err;
          }
        );
      }
    }
  }
}
