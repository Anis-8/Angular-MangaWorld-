import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CommentaireComponent } from './pages/commentaire/commentaire.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo:'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'commetaire',
        component:CommentaireComponent
    }

];
