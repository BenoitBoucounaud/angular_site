import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApparatusService } from 'src/app/services/apparatus.service';
@Component({
    selector: 'app-single-apparatus',
    templateUrl: './single-apparatus.component.html',
    styleUrls: ['./single-apparatus.component.scss']
})

export class SingleApparatusComponent implements OnInit {

    id: number = 0;
    name: string = 'Apparatus';
    status: string = 'Status';

    constructor(private apparatusService: ApparatusService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        // const id: number = + this.route.snapshot.paramMap.get('id')!;
        const id: number = this.route.snapshot.params['id'];
        let apparatus = this.apparatusService.getApparatusById(+id)
        if (apparatus !== undefined) {
            this.name = apparatus.name;
            this.status = apparatus.status
        }
    }
}