import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-server',
    templateUrl: './server.html',
    styleUrl: './server.css', 
})
export class ServerComponent {
    serverId: number = 10;
    private serverStatus: string = 'offline';
    getServerStatus(): string {
        return this.serverStatus;
    }
}

//il componente ServerComponent lo includeremo nel file app-modules.ts nel modulo declarations e il tag selettore app-server lo useremo nel file app.html