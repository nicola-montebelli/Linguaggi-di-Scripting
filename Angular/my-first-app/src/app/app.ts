import { Component, signal } from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title: string = 'my-first-app';   //string interpolation (slide 41 del file 05_angular)
  author: string = 'Monte';

  datetime: string = '';
  pariDispari: boolean = true;
  constructor() {
        const source = interval(1000 /* number of milliseconds */);
        const subscribe = source.subscribe(
             (val) => {
              this.pariDispari = val % 2 === 0;   //property binding (slide 42 del file 05_angular)
              this.datetime = new Date().toString();
            }
        );
    }

    onClickPulsante(){
      console.log("Il pulsante è stato premuto"); //event binding (slide 43 del file 05_angular)
    }
}

//i nostri componenti sono classi
//e saranno scritte sempre così: export class NomeClasse{}
//gli attributi all'interno della classe vengono usati nel file app.html con il formato {{ nome-attributo }}
//sopra la classe c'è un decorator @Component:
//selector: indica a quale tag fa riferimento il componente
//templateUrl: indica quale file rappresenta il template del componente
//standalone
//styleUrl: indica quale file contiene lo style del componente