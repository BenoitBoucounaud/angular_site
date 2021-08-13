import { Component, Input, OnInit } from '@angular/core';
import { ApparatusService } from 'src/app/services/apparatus.service';

@Component({
    selector: 'app-apparatus',
    templateUrl: './apparatus.component.html',
    styleUrls: ['./apparatus.component.scss']
})
export class ApparatusComponent implements OnInit {

    // Needs configuration metadata when component is called
    @Input() apparatusName: string = '';
    @Input() apparatusStatus: string = 'off';
    @Input() index: number = 0;
    @Input() id: number = 0;

    isAuth: boolean = false;

    constructor(private apparatusService: ApparatusService) { }

    ngOnInit(): void {
    }


    getStatus() {
        return this.apparatusStatus;
    }

    getColor() {
        if (this.apparatusStatus.toLowerCase() === 'on') {
            return 'green';
        } else if (this.apparatusStatus.toLowerCase() === 'off') {
            return 'red';
        }
        return null;
    }

    onSwitch() {
        if (this.apparatusStatus.toLowerCase() === 'on') {
            this.apparatusStatus = 'off';
        }
        else
            this.apparatusStatus = 'on';
    }

    getSwitchingAction(): string {
        return this.apparatusService.getSwitchingAction(this.index)
    }

}
