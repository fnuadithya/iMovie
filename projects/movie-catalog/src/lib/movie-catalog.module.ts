import { MovieCatalogRoutingModule } from './movie-catalog-routing.module';
import { NgModule } from '@angular/core';
import { MovieCatalogComponent } from './movie-catalog.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './reducers/movies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './effects/movies.effects';

@NgModule({
  declarations: [MovieCatalogComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature( 'movies', movieReducer ),
    EffectsModule.forFeature([ MovieEffects ]),
    HttpClientModule,
    MovieCatalogRoutingModule
  ],
  exports: [MovieCatalogComponent]
})
export class MovieCatalogModule { }
