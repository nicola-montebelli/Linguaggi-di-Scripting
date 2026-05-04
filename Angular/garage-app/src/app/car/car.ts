import { Component, Input } from '@angular/core';
import { ICar } from '../car-model';

@Component({
  selector: 'app-car',
  standalone: false,
  templateUrl: './car.html',
  styleUrl: './car.css',
})
export class Car {
  @Input() car: ICar | null = null;
}
