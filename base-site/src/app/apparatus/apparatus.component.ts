import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-apparatus',
    templateUrl: './apparatus.component.html',
    styleUrls: ['./apparatus.component.scss']
})
export class ApparatusComponent implements OnInit {

    // Needs configuration metadata when component is called
    @Input() apparatusName: string = '';
    @Input() apparatusStatus: string = 'Off';

    constructor() { }

    ngOnInit(): void {
    }


    getStatus() {
        return this.apparatusStatus;
    }

}
