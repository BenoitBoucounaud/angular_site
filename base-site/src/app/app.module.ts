import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { ApparatusComponent } from './apparatus/apparatus.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        HomeComponent,
        ApparatusComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule // needed to use two-way binding
    ],
    providers: [],
    bootstrap: [HomeComponent] // home page route
})
export class AppModule { }
