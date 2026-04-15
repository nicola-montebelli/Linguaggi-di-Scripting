import { Component, Input } from '@angular/core';
import { CarService, ICar } from '../car-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  standalone: false,
  templateUrl: './car-details.html',
  styleUrl: './car-details.css',
})
export class CarDetails {
  @Input() car: ICar | null = null;
  message: string | null = null;

  constructor(private activatedRoute: ActivatedRoute, 
    private carService: CarService){

  }

    //con questa funzione recuperiamo il parametro che ci serve per il routing
    ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id'); //'id' dalla configurazione del Router
    console.log('CarDetails.ngOnInit(): car id=', id);
    if (id != null) {
      this.carService.getCar(Number(id))
        .then(c => {
          this.car = c;
          console.log('CarDetails.ngOnInit(): car ', this.car);
          this.message = null;
        })
        .catch(err => {
          console.error('CarDetails.ngOnInit(): error getting car id=', id, ' err=', err);
          this.message = err;
        });
    }
  }
}
