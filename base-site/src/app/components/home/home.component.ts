import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    title = 'Classic app to keep basics close';
    seconds: number = 0;
    counterSubscription: Subscription = new Subscription;

    constructor() {
    }

    ngOnInit(): void {
        const counter = Observable.interval(1000);

        this.counterSubscription = counter.subscribe(
            // if observable emit new data
            (value) => {
                this.seconds = value;
            },
            // if ko
            (error) => {
                console.log('Uh-oh, an error occurred! : ' + error);
            },
            // if observable ends
            () => {
                console.log('Observable complete!');
            }
        );
    }

    // activated when a component is destroyed
    ngOnDestroy() {
        this.counterSubscription.unsubscribe();
    }

}
