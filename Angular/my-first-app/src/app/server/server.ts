import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-server',
    templateUrl: './server.html',
    styleUrl: './server.css', 
})

//si possono scrivere i contenuti di server.css e server.html
//direttamente in questo file in questo modo:
/* 
@Component({
    standalone: false,
    selector: 'app-server',
    template: `
        <p [ngStyle]="{ backgroundColor: getColor() }">
            {{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}
        </p>
    `,
    styles: [
        `.online {
            color: white;
        }
        `,
     ]
})
*/
export class ServerComponent {
    @Input() name: string = ''; //@Input() slide 58
    serverId: number = 10;
    private serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = (Math.random() > 0.5 ? 'online' : 'offline');
    }

    getServerStatus(): string {
        return this.serverStatus;
    }

    getColor() {
        return (this.serverStatus === 'online' ? 'green' : 'red');
    }

    /**
     * riavvia il server.
     */
    onReboot() {
        this.serverStatus = 'offline';
        setTimeout(() => {
            this.serverStatus = 'online';
        }, 5000);
    }

    @Output() removed = new EventEmitter<string>(); //@Output slide 60/61
    //<string> ad esempio il nome del server 
    onRemove(){
        this.removed.emit(this.name);
    }
}

//il componente ServerComponent lo includeremo nel file app-modules.ts nel modulo declarations e il tag selettore app-server lo useremo nel file app.html