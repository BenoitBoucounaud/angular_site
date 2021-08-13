import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ApparatusService } from 'src/app/services/apparatus.service';

@Component({
    selector: 'app-apparatus',
    templateUrl: './apparatus.component.html',
    styleUrls: ['./apparatus.component.scss']
})
export class ApparatusComponent implements OnInit {

    // Needs configuration metadata when component is called
    @Input() index: number = 0;
    @Input() id: number = 0;

    isAuth: boolean = false;
    apparatus: any = {}
    apparatusesSub: Subscription = new Subscription;

    constructor(private apparatusService: ApparatusService) { }

    ngOnInit(): void {
        this.apparatusesSub = this.apparatusService.apparatusSubject.subscribe(
            (apparatuses: any[]) => {
                this.apparatus = apparatuses[this.index]
            }
        );
        this.apparatusService.emitApparatusSubject();
    }


    getStatus() {
        return this.apparatus.status;
    }

    getColor() {
        if (this.apparatus.status.toLowerCase() === 'on') {
            return 'green';
        } else if (this.apparatus.status.toLowerCase() === 'off') {
            return 'red';
        }
        return null;
    }

    onSwitch() {
        if (this.apparatus.status.toLowerCase() === 'on') {
            this.apparatus.status = 'off';
        }
        else
            this.apparatus.status = 'on';

        this.apparatusService.emitApparatusSubject();
    }

    getSwitchingAction(): string {
        return this.apparatusService.getSwitchingAction(this.index)
    }

    ngOnDestroy(): void {
        this.apparatusesSub.unsubscribe();
    }

}
