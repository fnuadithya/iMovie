import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IMovieHomePageComponent } from './components/i-movie-home-page/i-movie-home-page.component';
import { RoutePath } from './models/page-route-enum';


const routes: Routes = [
  {
    path: RoutePath.Imovie,
    component: IMovieHomePageComponent,
    children: [
      {
        path: 'movies',
        loadChildren: () => import ('movie-catalog').then(m => m.MovieCatalogModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'imovie',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
