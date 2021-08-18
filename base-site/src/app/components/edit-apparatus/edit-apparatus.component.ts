import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApparatusService } from 'src/app/services/apparatus.service';

@Component({
    selector: 'app-edit-apparatus',
    templateUrl: './edit-apparatus.component.html',
    styleUrls: ['./edit-apparatus.component.scss']
})
export class EditApparatusComponent implements OnInit {

    defaultStatus = "off";

    constructor(private apparatusService: ApparatusService, private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        const name = form.value['name'];
        const status = form.value['status'];
        this.apparatusService.addApparatus(name, status);
        this.router.navigate(['/apparatus-list']);
    }
}
