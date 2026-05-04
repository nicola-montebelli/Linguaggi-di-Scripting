import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarService } from '../car-service';
import { interval, Subscription } from 'rxjs';
import { ICar } from '../car-model';

@Component({
  selector: 'app-car-list',
  standalone: false,
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarList implements OnInit, OnDestroy {
  carList: ICar[] = [];
  message: string | null  = '';
  searchText: string = '';
  sub: Subscription | null = null;

  constructor(private carService: CarService){}
  
  
//lifecycle hooks
  ngOnInit() {
    //implementazione con Observable
    this.carService.getCarList$().subscribe(  
      list => {
      this.carList = list;
      this.message = null;
    },
      err => {
        console.log('CarList', err);
        this.carList = [];
        this.message = err;
      },
      () => {
        console.log('carService.getCarList$.complete');
      }
    )

    //esempio per mostrare come gestire gli observable con eventi infiniti
    //notare nel browser come il contatore si annulla e viene distrutto quando andiamo a cliccare per visualizzare il dettaglio
    if(this.sub === null){
      this.sub = interval(1000).subscribe(val => console.log(val));
    }
  }
   

  ngOnDestroy() {
    console.log('CarlList.ngOnDestroy');

    //è opportuno distruggere un observable altrimenti anche se esce dalla init continuerà a processare (vedere nella OnInit l'observable interval)
    if(this.sub != null){
      this.sub?.unsubscribe();
      this.sub = null;
    }
  }

  //metodo che si inizializza all'evento (click) nel bottone nel template car-list (anche se sarebbe meglio metterlo nel template app)
  onSearch(){
     this.carService.getCarList$(this.searchText).subscribe(
      list => {
      this.carList = list;
      this.message = null;
    },
      err => {
        console.log('CarList', err);
        this.carList = [];
        this.message = err;
      },
      () => {
        console.log('carService.getCarList$.complete');
      }
    )
  }



  // Creazione:
  //
  // + nella pagina di elenco, a fianco della ricerca, aggiungere un pulsante "+ Nuovo"
  // + visualizzazione form inserimento nuova Car
  // + nel form creazione ci sarà il pulsante di "Crea" che:
  //   - chiamerà il service passando i dati nella nuova Car
  //   - il service chiamerà l'API del backend per creare la nuova Car
  //   - se tutto va bene, visualizziamo la pagina di dettaglio della Car appena creata
  //
}



