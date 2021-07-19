import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    title = 'Classic app to keep basics close';
    isAuth = false;

    // apparatu : status
    apparatus = {
        'Washing machine': 'Off',
        'Coffee machine': 'On',
        'Dishwasher': 'Off'
    };


    constructor() {
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
