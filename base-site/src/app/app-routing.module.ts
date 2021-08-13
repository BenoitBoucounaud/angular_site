import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApparatusListComponent } from './components/apparatus-list/apparatus-list.component';
import { ApparatusComponent } from './components/apparatus/apparatus.component';
import { AuthComponent } from './components/auth/auth.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SingleApparatusComponent } from './components/single-apparatus/single-apparatus.component';
import { AuthGuard } from './services/auth-guard.service';

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
