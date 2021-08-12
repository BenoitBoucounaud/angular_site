import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApparatusListComponent } from './apparatus-list/apparatus-list.component';
import { ApparatusComponent } from './apparatus/apparatus.component';
import { AuthComponent } from './auth/auth.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { AuthGuard } from './services/auth-guard.service';
import { SingleApparatusComponent } from './single-apparatus/single-apparatus.component';

const routes: Routes = [
    {
        path: 'apparatus-list',
        canActivate: [AuthGuard],
        component: ApparatusListComponent
    },
    {
        path: 'apparatus',
        canActivate: [AuthGuard],
        component: ApparatusComponent
    },
    {
        path: 'apparatus/:id',
        canActivate: [AuthGuard],
        component: SingleApparatusComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'post-list',
        component: PostListComponent
    },
    {
        path: 'angular-home-page',
        component: AppComponent
    },
    {
        path: '', // root route
        component: ApparatusListComponent
    },
    {
        path: 'not-found',
        component: FourOhFourComponent
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
