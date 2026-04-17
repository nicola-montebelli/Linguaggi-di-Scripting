import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CarList } from './car-list/car-list';
import { Car } from './car/car';
import { CarDetails } from './car-details/car-details';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, CarList, Car, CarDetails],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    HttpClientModule,
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],

   bootstrap: [App],
})
export class AppModule {}
