import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularPageComponent } from './components/angular-page/angular-page.component';
import { ApparatusListComponent } from './components/apparatus-list/apparatus-list.component';
import { ApparatusComponent } from './components/apparatus/apparatus.component';
import { AuthComponent } from './components/auth/auth.component';
import { EditApparatusComponent } from './components/edit-apparatus/edit-apparatus.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SingleApparatusComponent } from './components/single-apparatus/single-apparatus.component';
import { UserListComponent } from './components/user-list/user-list.component';
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
        path: 'apparatus-edit',
        canActivate: [AuthGuard],
        component: EditApparatusComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'users',
        component: UserListComponent
    },

    {
        path: 'new-user',
        component: NewUserComponent
    },
    {
        path: 'post-list',
        component: PostListComponent
    },

    {
        path: 'angular-home-page',
        component: AngularPageComponent
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
