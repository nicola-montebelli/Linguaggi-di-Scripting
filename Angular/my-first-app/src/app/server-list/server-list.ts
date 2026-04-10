import { Component } from '@angular/core';

@Component({
  selector: '[app-server-list]',
  standalone: false,
  templateUrl: './server-list.html',
  styleUrl: './server-list.css',
})
export class ServerList {

  serverName = '';
//    onUpdateServerName(event: Event) {
//     //this.serverName = (<HTMLInputElement>event.target).value;
//     // nuova sintassi a partire da Typescript >= 1.6.x
//     this.serverName = (event.target as HTMLInputElement).value;
//  }
 //^ event binding parameters (slide 44) + file server-list.html che viene sostituita dal 2-way binding (slide 46)

  serverCreationStatus = 'No server created';
  serverWasCreated = false;
   onCreateServer() {
    this.serverWasCreated = true;
    this.serverCreationStatus = 'Server created!';
    this.serverList.push(this.serverName);
   }
  serverList = [ 'Server 1', 'Server 2','Server 3','Server 4','Server 5','Server 6','Server 7',];

  allowNewServer = false;
   constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onServerRemoved(serverRemoved: string) {
        console.log("onServerRemoved(): ", serverRemoved);
        for (let i = 0; i < this.serverList.length; i++) {
            const server = this.serverList[i];
            if (server === serverRemoved) {
                this.serverList.splice(i, 1);
                break;
            }
        }
    }
}
