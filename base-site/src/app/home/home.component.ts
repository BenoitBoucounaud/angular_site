import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    title = 'Classic app to keep basics close';
    isAuth = false;
    lastUpdate = new Date()!
    // We emulate catching data from server
    lastUpdateAsync = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(
            () => {
                resolve(date);
            }, 2000
        );
    });

    // apparatu : status
    apparatus = {
        'Washing machine': 'Off',
        'Coffee machine': 'On',
        'Dishwasher': 'Off'
    };


    constructor(private router: Router) {
        // set 4 sec to make isAuth = true
        setTimeout(
            () => {
                this.isAuth = true;
            }, 4000
        );
    }

    ngOnInit(): void {
    }

    onTurnOn() {
        console.log('We turn all on!')
    }


}
