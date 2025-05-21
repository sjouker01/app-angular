import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OpleidingenComponent } from './opleidingen/opleidingen.component';
import { WerkComponent } from './werk/werk.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
        
    },
    {
        path: 'opleiding',
        component: OpleidingenComponent,
        title: 'Opleiding page'
    },
    {
        path: 'werk',
        component: WerkComponent,
        title: 'werk page'
    },
    {
        path: 'movies',
        component: MoviesComponent,
        title: ' movies page '
    }
];
