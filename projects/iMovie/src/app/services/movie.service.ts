import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

/**
 * Service to handle iframe interactions.
 */
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private httpClient: HttpClient
  ) {}

  /**
   * Checks if app is being access inside iframe route.
   */
  public getMovies(): Observable<Movie[]> {
    console.log('in service');
    return this.httpClient.get<Movie[]>('http://localhost:8080/movies');
  }
}
