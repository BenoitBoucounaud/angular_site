import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
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
import { AngularPageComponent } from './components/angular-page/angular-page.component';
import { EditApparatusComponent } from './components/edit-apparatus/edit-apparatus.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { NewUserComponent } from './components/new-user/new-user.component';

@NgModule({
    declarations: [
        HomeComponent,
        ApparatusComponent,
        PostComponent,
        PostListComponent,
        AuthComponent,
        ApparatusListComponent,
        SingleApparatusComponent,
        FourOhFourComponent,
        AngularPageComponent,
        EditApparatusComponent,
        UserListComponent,
        NewUserComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule, // needed to use two-way binding
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        ApparatusService,
        PostsServices,
        AuthService,
        AuthGuard,
        UserService
    ],
    bootstrap: [HomeComponent] // home page route
})
export class AppModule { }
