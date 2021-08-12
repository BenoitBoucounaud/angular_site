import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApparatusComponent } from './apparatus/apparatus.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { ApparatusService } from './services/apparatus.service';
import { PostsServices } from './services/posts.service';
import { AuthComponent } from './auth/auth.component';
import { ApparatusListComponent } from './apparatus-list/apparatus-list.component';
import { AuthService } from './services/auth.service';
import { SingleApparatusComponent } from './single-apparatus/single-apparatus.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ApparatusComponent,
        PostComponent,
        PostListComponent,
        AuthComponent,
        ApparatusListComponent,
        SingleApparatusComponent,
        FourOhFourComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule // needed to use two-way binding
    ],
    providers: [
        ApparatusService,
        PostsServices,
        AuthService,
        AuthGuard
    ],
    bootstrap: [HomeComponent] // home page route
})
export class AppModule { }
