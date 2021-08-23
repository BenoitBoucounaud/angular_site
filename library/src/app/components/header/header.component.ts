import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    isAuth: boolean = false;

    constructor(
        private authService: AuthService,
        public afAuth: AngularFireAuth,
    ) { }

    ngOnInit() {
        this.afAuth.onAuthStateChanged(
            (user) => {
                if (user) {
                    this.isAuth = true;
                } else {
                    this.isAuth = false;
                }
            }
        );
    }

    onSignOut() {
        this.authService.signOutUser();
    }

}
