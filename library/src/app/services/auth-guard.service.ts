import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {


    constructor(
        public afAuth: AngularFireAuth,
        private router: Router
    ) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return new Promise(
            (resolve, reject) => {
                this.afAuth.onAuthStateChanged(
                    (user) => {
                        if (user) {
                            resolve(true);
                        } else {
                            this.router.navigate(['/auth', 'signin']);
                            resolve(false);
                        }
                    }
                );
            }
        );
    }
}
