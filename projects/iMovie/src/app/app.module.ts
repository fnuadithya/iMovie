import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCatalogModule } from 'movie-catalog';
import { IMovieHomePageComponent } from './components/i-movie-home-page/i-movie-home-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    IMovieHomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MovieCatalogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
