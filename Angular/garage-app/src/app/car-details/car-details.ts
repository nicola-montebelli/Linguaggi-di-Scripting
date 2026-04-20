import { Component, Input, OnInit } from '@angular/core';
import { CarService, ICar } from '../car-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  standalone: false,
  templateUrl: './car-details.html',
  styleUrl: './car-details.css',
})
export class CarDetails implements OnInit {
  @Input() car: ICar | null = null;
  message: string | null = null;
  carId: string | null = '';

  constructor(private activatedRoute: ActivatedRoute, 
    private carService: CarService){

  }

    //con questa funzione recuperiamo il parametro che ci serve per il routing
    ngOnInit(): void {
     this.carId = this.activatedRoute.snapshot.paramMap.get('id'); //'id' dalla configurazione del Router
    // console.log('CarDetails.ngOnInit(): car id=', id);
    if (this.carId != null) {
    //   this.carService.getCar(Number(id))
    //     .then(c => {
    //       this.car = c;
    //       console.log('CarDetails.ngOnInit(): car ', this.car);
    //       this.message = null;
    //     })
    //     .catch(err => {
    //       console.error('CarDetails.ngOnInit(): error getting car id=', id, ' err=', err);
    //       this.message = err;
    //     });
   
    this.carService.getCar$(Number(this.carId)).subscribe({
      next: c => {
          this.car = c;
          console.log('CarDetails.ngOnInit(): car ', this.car);
          this.message = null;
        },
        error: err => {
          console.error('CarDetails.ngOnInit(): error getting car id=', this.carId, ' err=', err);
          this.message = err;
        },
        complete: () => {
          console.log('carService.getCar$ complete');
        }
    });
    //questa è la sinstassi nuova (quella in car-list.ts è deprecata)
  
  }

  }
}
