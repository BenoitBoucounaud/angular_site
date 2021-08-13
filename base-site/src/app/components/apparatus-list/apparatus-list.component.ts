import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApparatusService } from 'src/app/services/apparatus.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-apparatus-list',
    templateUrl: './apparatus-list.component.html',
    styleUrls: ['./apparatus-list.component.scss']
})
export class ApparatusListComponent implements OnInit {

    isAuth = false;
    lastUpdate = new Date()!
    apparatuses: any = {}
    apparatusesSub: Subscription = new Subscription;


    // We emulate catching data from server
    lastUpdateAsync = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(
            () => {
                resolve(date);
            }, 2000
        );
    });

    constructor(private router: Router, private apparatusService: ApparatusService) {
        // set 4 sec to make isAuth = true
        setTimeout(
            () => {
                this.isAuth = true;
            }, 4000
        );
    }

    ngOnInit(): void {
        this.apparatusesSub = this.apparatusService.apparatusSubject.subscribe(
            (apparatuses: any[]) => {
                this.apparatuses = apparatuses
            }
        );
        this.apparatusService.emitApparatusSubject();
    }

    onTurnOn() {
        this.apparatusService.switchOnAll()
    }
    onTurnOff() {
        if (confirm('Are you sure you want to turn off all your apparatuses? ')) {
            this.apparatusService.switchOffAll()
        }
    }

    ngOnDestroy(): void {
        this.apparatusesSub.unsubscribe();
    }
}
