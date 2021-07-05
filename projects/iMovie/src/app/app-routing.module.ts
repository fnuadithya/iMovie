import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieCatalogComponent, MovieCatalogModule } from 'movie-catalog';
import { IMovieHomePageComponent } from './components/i-movie-home-page/i-movie-home-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: IMovieHomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'hindi',
    loadChildren: () => import ('movie-catalog').then(m => m.MovieCatalogModule),
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
