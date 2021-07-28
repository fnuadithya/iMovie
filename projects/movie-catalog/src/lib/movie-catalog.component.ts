import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Movie } from './models/movie.model';
import { getMovies } from './reducers/movies.reducer';
@Component({
  selector: 'i-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styles: [
  ]
})
export class MovieCatalogComponent implements OnInit {

  /**
   * observable which contain all the movies
   */
   movies$: Observable<Movie[]>;

   /**
    * user selected movie language
    */
   movieLanguage: string;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    console.log('in movie catalog');
    this.movies$ = this.store.pipe(select(getMovies));
  }
}

