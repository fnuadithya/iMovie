import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Languages } from '../../models/language-enums.model';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-i-movie-home-page',
  templateUrl: './i-movie-home-page.component.html',
  styleUrls: ['./i-movie-home-page.component.scss']
})
export class IMovieHomePageComponent implements OnInit {

  /**
   * list of languages available
   */
   availableMovieLanguages = Languages;

   /**
    * array of objects which contain all the movies
    */
   movies: Movie[];

   constructor(
     private movieService: MovieService,
     private router: Router) { }

   ngOnInit(): void {
     this.movieService.getMovies().subscribe((movies: Movie[]) => {
       this.movies = movies;
       console.log(this.movies);
     });
   }

   getMovieCatalog() {
     this.router.navigate(['/hindi']);
   }
}
