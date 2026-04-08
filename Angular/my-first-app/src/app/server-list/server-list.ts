import { Component } from '@angular/core';

@Component({
  selector: '[app-server-list]',
  standalone: false,
  templateUrl: './server-list.html',
  styleUrl: './server-list.css',
})
export class ServerList {

  serverName = '';
   onUpdateServerName(event: Event) {
    //this.serverName = (<HTMLInputElement>event.target).value;
    // nuova sintassi a partire da Typescript >= 1.6.x
    this.serverName = (event.target as HTMLInputElement).value;
 }
 //^ event binding parameters (slide 44) + file server-list.html che viene sostituita dal 2-way binding (slide 46)

  serverCreationStatus = 'No server created';
   onCreateServer() {
    this.serverCreationStatus = 'Server created!';
   }

  allowNewServer = false;
   constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
}
