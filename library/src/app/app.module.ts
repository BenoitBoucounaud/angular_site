import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SingleBookComponent } from './components/book-list/single-book/single-book.component';
import { BookFormComponent } from './components/book-list/book-form/book-form.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1u0L829GIo45NHfSM07lYt7cMAUoF_Rs",
    authDomain: "library-database-e6cc6.firebaseapp.com",
    projectId: "library-database-e6cc6",
    storageBucket: "library-database-e6cc6.appspot.com",
    messagingSenderId: "384383565584",
    appId: "1:384383565584:web:7cadb32f1e0bbe2643ef95"
};

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        SigninComponent,
        BookListComponent,
        SingleBookComponent,
        BookFormComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig), //initialize firebase
        AngularFirestoreModule, // firestore
        AngularFireAuthModule, // auth
        AngularFireStorageModule // storage
    ],
    providers: [
        AuthGuardService,
        AuthService,
        BooksService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
