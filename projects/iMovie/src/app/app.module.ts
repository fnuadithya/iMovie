import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IMovieHomePageComponent } from './components/i-movie-home-page/i-movie-home-page.component';
import { TestComponent } from './components/test/test.component';
import { StoreModule } from '@ngrx/store';
import { MovieEffects, movieReducer } from 'projects/movie-catalog/src/public-api';
import { EffectsModule } from '@ngrx/effects';
import { MovieCatalogModule } from 'movie-catalog';


@NgModule({
  declarations: [
    AppComponent,
    IMovieHomePageComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovieCatalogModule,
    StoreModule.forRoot({ movies: movieReducer }),
    EffectsModule.forRoot([ MovieEffects ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
