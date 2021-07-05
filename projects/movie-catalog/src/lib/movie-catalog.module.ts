import { MovieCatalogRoutingModule } from './movie-catalog-routing.module';
import { NgModule } from '@angular/core';
import { MovieCatalogComponent } from './movie-catalog.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MovieCatalogComponent],
  imports: [
    CommonModule,
    MovieCatalogRoutingModule
  ],
  exports: [MovieCatalogComponent]
})
export class MovieCatalogModule { }
