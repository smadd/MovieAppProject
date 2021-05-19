import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieTitleComponent } from './movies/movie-title/movie-title.component';
import { MovieRatingComponent } from './movies/movie-rating/movie-rating.component';
import { MovieRuntimeComponent } from './movies/movie-runtime/movie-runtime.component';
import { MovieGenreComponent } from './movies/movie-genre/movie-genre.component';
import { MainActorsComponent } from './movies/main-actors/main-actors.component';
import { MovieSummaryComponent } from './movies/movie-summary/movie-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieTitleComponent,
    MovieRatingComponent,
    MovieRuntimeComponent,
    MovieGenreComponent,
    MainActorsComponent,
    MovieSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
