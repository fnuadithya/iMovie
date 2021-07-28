import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class MovieCatalogService {

  constructor(
    private httpClient: HttpClient
  ) {}

  /**
   * Checks if app is being access inside iframe route.
   */
  public getMovies(movieLanguage: string): Observable<Movie[]> {
    console.log('in service', movieLanguage);
    return this.httpClient.get<Movie[]>('http://localhost:8080/movies');
  }
}
