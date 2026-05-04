import { Component, Input, OnInit } from '@angular/core';
import { CarService} from '../car-service';
import { ICar } from '../car-model';
import { ActivatedRoute, Router } from '@angular/router';

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
    private carService: CarService,
    private router: Router){

  }

    //con questa funzione recuperiamo il parametro che ci serve per il routing
    ngOnInit(): void {
     this.carId = this.activatedRoute.snapshot.paramMap.get('id'); //'id' dalla configurazione del Router
    // console.log('CarDetails.ngOnInit(): car id=', id);
    if (this.carId != null) {
   
    this.carService.getCar$(String(this.carId)).subscribe({ //subscribe è un metodo rxjs che ritorna un osbervable che è in ascolto per un flusso di eventi
                                                            //a differenza di una promise la subscribe gestisce più eventi
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

  onDelete() {
     if (this.carId != null) {
      this.carService.deleteCar$(this.carId).subscribe({
        next: c => {
          this.car = null;
          console.log('CarDetails.onDelete(): ',c);
          this.message = "Auto Eliminata";
          setTimeout(() => this.router.navigate(['/']), 5000); //questa funzione riporta alla pagina indice dopo l'eliminazione dopo 5 secondi
        },
        error: err => {
          console.error('CarDetails.onDelete(): error removing car id=', this.carId, ' err=', err);
          this.message = err;
        }
      });
    }
  }
}
