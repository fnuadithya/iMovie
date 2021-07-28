import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getMoviesAction } from 'movie-catalog';
import { Languages } from '../../models/language-enums.model';
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

   homePage = true;

   constructor(
     private router: Router,
     private store: Store< any>,
     private route: ActivatedRoute) { }

   ngOnInit(): void {
   }

   getMovieCatalog(language) {
     this.homePage = false;
     this.store.dispatch(getMoviesAction({ payload : language}));
     this.router.navigate(['movies'], {relativeTo: this.route, queryParams: {lang : language}});
   }
}
