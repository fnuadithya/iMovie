import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const getMoviesAction = createAction('[Movies] Get Movies', props<{ payload: string }>());
export const getMoviesSuccess = createAction('[Movies] Get Movies Success', props<{ payload: Movie[] }>());
export const getMoviesErrorAction = createAction('[Movies] Get Movies Error', props<{ payload: HttpErrorResponse }>());

