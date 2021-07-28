import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { MovieState } from '../reducers/movies.reducer';
import * as MovieActions from '../actions/movies.action';
import { MovieCatalogService } from '../movie-catalog.service';
import { Movie } from '../models/movie.model';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private movieService: MovieCatalogService,
    private store: Store<MovieState>,
  ) { }

  getMovies$ = createEffect(() => this.actions$.pipe(
      ofType(MovieActions.getMoviesAction),
      switchMap((action) => this.movieService.getMovies(action.payload).pipe(
        map((response: Movie[]) => MovieActions.getMoviesSuccess({ payload: response }))
      ))
  ));
}
