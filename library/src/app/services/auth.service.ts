import { NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    // here it s simple, to go further : https://www.positronx.io/full-angular-7-firebase-authentication-system/

    constructor(
        public afs: AngularFirestore,
        public afAuth: AngularFireAuth,
        public router: Router,
    ) {
    }

    SignIn(email: string, password: string) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log('Sign in succes : ', result)
                this.router.navigate(['books']);
            }).catch((error) => {
                window.alert(error.message)
            })
    }

    SignUp(email: string, password: string) {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log('Sign up succes : ', result)
                this.router.navigate(['books']);
            }).catch((error) => {
                window.alert(error.message)
            })
    }

    signOutUser() {
        this.afAuth.signOut();
    }
}
