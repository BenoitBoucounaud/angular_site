import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-angular-page',
    templateUrl: './angular-page.component.html',
    styleUrls: ['./angular-page.component.scss']
})
export class AngularPageComponent implements OnInit {
    title = 'Classic app to keep basics close';

    constructor() { }

    ngOnInit(): void {
    }

}
