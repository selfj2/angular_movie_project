import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { WatchListComponent } from './watch/watchlist.component';
// Route Configuration
export const routes: Routes = [
    { path: '', component: MoviesComponent },
    { path: 'movie/:id', component: MovieComponent },
    { path: 'watchlist', component: WatchListComponent }
];

export const appRoutingProvider: ModuleWithProviders = RouterModule.forRoot(routes);