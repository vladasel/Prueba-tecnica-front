import { Component, OnInit } from '@angular/core';
import { MovieService } from '../_services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any = null;

  constructor(private serviceM: MovieService) { }

  ngOnInit(): void {
    this.seeMovies();
  }

  seeMovies(): void {
    this.serviceM.getPopularMovie()
      .subscribe(
        data => {
          this.movies = data;
          console.log(data);

        });
  }




}
