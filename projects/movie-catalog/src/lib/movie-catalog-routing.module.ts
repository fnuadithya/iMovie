import { MovieCatalogComponent } from './movie-catalog.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const MovieCatalogRoutes: Routes = [
    {
        path: '',
        component: MovieCatalogComponent,
        pathMatch: 'full'
    }
];

/**
 * Routing module to handle only movie catalog routes
 */
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MovieCatalogRoutes)
    ],
    exports: [RouterModule]
})

export class MovieCatalogRoutingModule { }
