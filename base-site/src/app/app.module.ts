import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApparatusService } from './services/apparatus.service';
import { PostsServices } from './services/posts.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { SingleApparatusComponent } from './components/single-apparatus/single-apparatus.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { ApparatusListComponent } from './components/apparatus-list/apparatus-list.component';
import { AuthComponent } from './components/auth/auth.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { ApparatusComponent } from './components/apparatus/apparatus.component';
import { HomeComponent } from './components/home/home.component';

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
