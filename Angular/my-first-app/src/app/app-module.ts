import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server';
import { ServerList } from './server-list/server-list';

@NgModule({
  declarations: [App, ServerComponent, ServerList],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  exports: [],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
  bootstrap: [App],
})
export class AppModule {}
